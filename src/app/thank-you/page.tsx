import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata, pageSeo } from "@/lib/seo";
import { company, telHref, mailtoHref } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.thankYou, { noIndex: true });

export default function ThankYouPage() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <div className="glass max-w-lg rounded-2xl p-10">
        <CheckCircle2 className="mx-auto h-14 w-14 text-accent-400 motion-safe:animate-fade-up" aria-hidden="true" />
        <h1 className="mt-5 text-2xl font-bold text-white sm:text-3xl">Enquiry received</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Thank you for contacting STM MACHINERY. Our team will review your requirement and
          get back to you. If your enquiry is urgent, reach us directly:
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={telHref} className="btn-secondary">{company.phone.display}</a>
          <a href={mailtoHref} className="btn-secondary">{company.email}</a>
        </div>
        <Link href="/" className="btn-primary mt-6 w-full">Back to home</Link>
      </div>
    </section>
  );
}
