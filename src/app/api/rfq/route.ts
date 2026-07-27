import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  validateRfq,
  sanitizeText,
  fileExtensionAllowed,
  MAX_FILE_BYTES,
  MAX_TOTAL_BYTES,
  MAX_FILES,
  type RfqInput,
} from "@/lib/rfq-schema";
import { company } from "@/lib/company";

export const runtime = "nodejs";

// --- Simple in-memory rate limiter (per instance). --------------------------
// For production behind multiple instances, back this with a shared store
// (e.g. Upstash Redis). Documented in README + SECURITY notes.
const WINDOW_MS = 60_000;
const MAX_REQ = 5;
const hits = new Map<string, { count: number; ts: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_REQ;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please wait a moment and try again." },
      { status: 429 },
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields
  if (sanitizeText(form.get("website"), 200)) {
    // Pretend success to avoid tipping off bots
    return NextResponse.json({ ok: true });
  }

  const input: RfqInput = {
    fullName: sanitizeText(form.get("fullName"), 120),
    company: sanitizeText(form.get("company"), 200),
    email: sanitizeText(form.get("email"), 200),
    phone: sanitizeText(form.get("phone"), 60),
    country: sanitizeText(form.get("country"), 100),
    industry: sanitizeText(form.get("industry"), 100),
    product: sanitizeText(form.get("product"), 300),
    requirement: sanitizeText(form.get("requirement"), 5000),
    contactMethod: sanitizeText(form.get("contactMethod"), 20) || "Email",
    consent: form.get("consent") === "true" || form.get("consent") === "on",
  };

  const errors = validateRfq(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  // Validate attachments
  const rawFiles = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  if (rawFiles.length > MAX_FILES) {
    return NextResponse.json({ message: `Please attach no more than ${MAX_FILES} files.` }, { status: 422 });
  }
  let total = 0;
  const attachments: { filename: string; content: Buffer }[] = [];
  for (const f of rawFiles) {
    if (!fileExtensionAllowed(f.name)) {
      return NextResponse.json({ message: `File type not allowed: ${f.name}` }, { status: 422 });
    }
    if (f.size > MAX_FILE_BYTES) {
      return NextResponse.json({ message: `File too large: ${f.name}` }, { status: 422 });
    }
    total += f.size;
    if (total > MAX_TOTAL_BYTES) {
      return NextResponse.json({ message: "Attachments exceed the total size limit." }, { status: 422 });
    }
    attachments.push({ filename: f.name.replace(/[^\w.\- ]/g, "_"), content: Buffer.from(await f.arrayBuffer()) });
  }

  // --- Send email ----------------------------------------------------------
  // Requires SMTP_* env vars. If not configured, fail explicitly rather than
  // pretending the enquiry was sent (per the brief: no simulated success).
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RFQ_TO, RFQ_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[RFQ] SMTP not configured — enquiry not sent.");
    return NextResponse.json(
      { message: "Enquiry service is not yet configured. Please email us directly at " + company.email + "." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = RFQ_TO || company.email;
  const from = RFQ_FROM || SMTP_USER;

  const lines = [
    `New quotation request from ${company.domain}`,
    "",
    `Name:            ${input.fullName}`,
    `Company:         ${input.company}`,
    `Email:           ${input.email}`,
    `Phone:           ${input.phone}`,
    `Country:         ${input.country}`,
    `Industry:        ${input.industry || "—"}`,
    `Product/equip.:  ${input.product}`,
    `Preferred contact: ${input.contactMethod}`,
    "",
    "Requirement:",
    input.requirement,
    "",
    `Attachments: ${attachments.length}`,
  ];

  try {
    await transporter.sendMail({
      from: `"STM Website Enquiry" <${from}>`,
      to,
      replyTo: input.email,
      subject: `RFQ: ${input.product} — ${input.company}`,
      text: lines.join("\n"),
      attachments,
    });
  } catch (err) {
    console.error("[RFQ] sendMail failed:", err);
    return NextResponse.json(
      { message: "We couldn't send your enquiry right now. Please email us directly at " + company.email + "." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
