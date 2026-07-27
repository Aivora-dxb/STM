"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Upload, X, Loader2, AlertCircle } from "lucide-react";
import {
  validateRfq,
  fileExtensionAllowed,
  ALLOWED_FILE_EXTENSIONS,
  MAX_FILE_BYTES,
  MAX_FILES,
  CONTACT_METHODS,
  type FieldErrors,
} from "@/lib/rfq-schema";
import { industries } from "@/content/catalog";

const field =
  "w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400";
const label = "block text-sm font-medium text-slate-200 mb-1.5";
const errText = "mt-1 flex items-center gap-1 text-xs text-red-400";

export function RfqForm({ defaultCategory }: { defaultCategory?: string }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const addFiles = useCallback(
    (incoming: FileList | null) => {
      if (!incoming) return;
      setFileError(null);
      const next = [...files];
      for (const f of Array.from(incoming)) {
        if (next.length >= MAX_FILES) {
          setFileError(`You can attach up to ${MAX_FILES} files.`);
          break;
        }
        if (!fileExtensionAllowed(f.name)) {
          setFileError(`"${f.name}" is not an allowed file type.`);
          continue;
        }
        if (f.size > MAX_FILE_BYTES) {
          setFileError(`"${f.name}" exceeds the 10 MB limit.`);
          continue;
        }
        if (!next.some((x) => x.name === f.name && x.size === f.size)) next.push(f);
      }
      setFiles(next);
    },
    [files],
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return; // prevent duplicate submissions
    setServerError(null);

    const form = formRef.current!;
    const fd = new FormData(form);
    const input = {
      fullName: String(fd.get("fullName") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      country: String(fd.get("country") || ""),
      industry: String(fd.get("industry") || ""),
      product: String(fd.get("product") || ""),
      requirement: String(fd.get("requirement") || ""),
      contactMethod: String(fd.get("contactMethod") || "Email"),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") || ""), // honeypot
    };

    const clientErrors = validateRfq(input);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setSubmitting(true);
    try {
      // Rebuild FormData with validated files only
      const payload = new FormData();
      Object.entries(input).forEach(([k, v]) => payload.append(k, String(v)));
      files.forEach((f) => payload.append("files", f));

      const res = await fetch("/api/rfq", { method: "POST", body: payload });
      if (res.ok) {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("rfq-submitted"));
        }
        router.push("/thank-you");
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (data?.errors) setErrors(data.errors);
      setServerError(
        data?.message || "Something went wrong sending your enquiry. Please try again or email us directly.",
      );
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
      {/* Honeypot — hidden from users, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={label}>Full name *</label>
          <input id="fullName" name="fullName" className={field} autoComplete="name"
            aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "err-fullName" : undefined} />
          {errors.fullName && <p id="err-fullName" className={errText}><AlertCircle className="h-3 w-3" />{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="company" className={label}>Company name *</label>
          <input id="company" name="company" className={field} autoComplete="organization"
            aria-invalid={!!errors.company} aria-describedby={errors.company ? "err-company" : undefined} />
          {errors.company && <p id="err-company" className={errText}><AlertCircle className="h-3 w-3" />{errors.company}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Business email *</label>
          <input id="email" name="email" type="email" className={field} autoComplete="email"
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined} />
          {errors.email && <p id="err-email" className={errText}><AlertCircle className="h-3 w-3" />{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone number *</label>
          <input id="phone" name="phone" type="tel" className={field} autoComplete="tel"
            aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "err-phone" : undefined} />
          {errors.phone && <p id="err-phone" className={errText}><AlertCircle className="h-3 w-3" />{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="country" className={label}>Country *</label>
          <input id="country" name="country" className={field} autoComplete="country-name"
            aria-invalid={!!errors.country} aria-describedby={errors.country ? "err-country" : undefined} />
          {errors.country && <p id="err-country" className={errText}><AlertCircle className="h-3 w-3" />{errors.country}</p>}
        </div>
        <div>
          <label htmlFor="industry" className={label}>Industry</label>
          <select id="industry" name="industry" className={field} defaultValue="">
            <option value="" disabled>Select an industry</option>
            {industries.map((i) => <option key={i.slug} value={i.name}>{i.name}</option>)}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="product" className={label}>Product or equipment required *</label>
        <input id="product" name="product" className={field} defaultValue={defaultCategory}
          placeholder="e.g. CNC milling machine, industrial pump, engine spare parts"
          aria-invalid={!!errors.product} aria-describedby={errors.product ? "err-product" : undefined} />
        {errors.product && <p id="err-product" className={errText}><AlertCircle className="h-3 w-3" />{errors.product}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="requirement" className={label}>Detailed requirement *</label>
        <textarea id="requirement" name="requirement" rows={5} className={field}
          placeholder="Specifications, quantities, make/model, timeline, delivery location…"
          aria-invalid={!!errors.requirement} aria-describedby={errors.requirement ? "err-requirement" : undefined} />
        {errors.requirement && <p id="err-requirement" className={errText}><AlertCircle className="h-3 w-3" />{errors.requirement}</p>}
      </div>

      <fieldset className="mt-5">
        <legend className={label}>Preferred contact method</legend>
        <div className="flex flex-wrap gap-4">
          {CONTACT_METHODS.map((m, i) => (
            <label key={m} className="flex items-center gap-2 text-sm text-slate-200">
              <input type="radio" name="contactMethod" value={m} defaultChecked={i === 0}
                className="h-4 w-4 accent-accent" />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      {/* File upload */}
      <div className="mt-5">
        <span className={label}>Attach specifications (optional)</span>
        <label htmlFor="files"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-white/20 bg-white/5 px-4 py-6 text-sm text-slate-300 hover:border-accent-400/50">
          <Upload className="h-4 w-4" aria-hidden="true" />
          Click to upload or drop files here
          <input id="files" name="files" type="file" multiple className="sr-only"
            accept={ALLOWED_FILE_EXTENSIONS.map((e) => "." + e).join(",")}
            onChange={(e) => addFiles(e.target.files)} />
        </label>
        <p className="mt-1.5 text-xs text-slate-500">
          Up to {MAX_FILES} files, 10 MB each. Allowed: {ALLOWED_FILE_EXTENSIONS.join(", ").toUpperCase()}.
        </p>
        {fileError && <p className={errText}><AlertCircle className="h-3 w-3" />{fileError}</p>}
        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f) => (
              <li key={f.name} className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-xs text-slate-200">
                <span className="truncate">{f.name} · {(f.size / 1024 / 1024).toFixed(1)} MB</span>
                <button type="button" onClick={() => setFiles(files.filter((x) => x !== f))}
                  aria-label={`Remove ${f.name}`} className="text-slate-400 hover:text-red-400">
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Consent */}
      <div className="mt-6">
        <label className="flex items-start gap-2.5 text-sm text-slate-300">
          <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-accent"
            aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "err-consent" : undefined} />
          <span>
            I agree that STM MACHINERY may contact me about this enquiry and I have read the{" "}
            <a href="/privacy-policy" className="text-accent-400 underline">Privacy Policy</a>. *
          </span>
        </label>
        {errors.consent && <p id="err-consent" className={errText}><AlertCircle className="h-3 w-3" />{errors.consent}</p>}
      </div>

      {serverError && (
        <div role="alert" className="mt-5 flex items-start gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />{serverError}
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn-primary mt-6 w-full disabled:opacity-60">
        {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Send enquiry"}
      </button>
    </form>
  );
}
