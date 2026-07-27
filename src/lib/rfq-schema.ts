/**
 * Shared RFQ validation. Used on the client for instant feedback and on the
 * server as the authoritative check. No external dependency — small hand-rolled
 * validators keep the bundle lean.
 */

export const ALLOWED_FILE_EXTENSIONS = [
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "jpg",
  "jpeg",
  "png",
  "dwg",
  "dxf",
  "zip",
] as const;

export const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB per file
export const MAX_TOTAL_BYTES = 25 * 1024 * 1024; // 25 MB total
export const MAX_FILES = 5;

export const CONTACT_METHODS = ["Email", "Phone", "WhatsApp"] as const;

export type RfqInput = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  product: string;
  requirement: string;
  contactMethod: string;
  consent: boolean;
  // Honeypot — must be empty
  website?: string;
};

export type FieldErrors = Partial<Record<keyof RfqInput, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRfq(input: Partial<RfqInput>): FieldErrors {
  const e: FieldErrors = {};

  if (!input.fullName?.trim()) e.fullName = "Please enter your full name.";
  else if (input.fullName.trim().length > 120) e.fullName = "Name is too long.";

  if (!input.company?.trim()) e.company = "Please enter your company name.";

  if (!input.email?.trim()) e.email = "Please enter your email address.";
  else if (!emailRe.test(input.email.trim())) e.email = "Please enter a valid email address.";

  if (!input.phone?.trim()) e.phone = "Please enter a phone number.";

  if (!input.country?.trim()) e.country = "Please enter your country.";

  if (!input.product?.trim()) e.product = "Please tell us what equipment you need.";

  if (!input.requirement?.trim()) e.requirement = "Please describe your requirement.";
  else if (input.requirement.trim().length > 5000)
    e.requirement = "Please keep the description under 5000 characters.";

  if (!input.consent) e.consent = "Please confirm you agree to be contacted.";

  return e;
}

export function fileExtensionAllowed(name: string): boolean {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return (ALLOWED_FILE_EXTENSIONS as readonly string[]).includes(ext);
}

/** Basic string sanitization for email output (strip control chars). */
export function sanitizeText(v: unknown, max = 5000): string {
  if (typeof v !== "string") return "";
  // eslint-disable-next-line no-control-regex
  return v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}
