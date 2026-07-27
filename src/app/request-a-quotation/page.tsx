import type { Metadata } from "next";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Breadcrumb, SectionHeader, JsonLd } from "@/components/ui/index";
import { RfqForm } from "@/components/sections/rfq-form";
import { buildMetadata, pageSeo, breadcrumbJsonLd } from "@/lib/seo";
import { company, telHref, mailtoHref, whatsappUrl } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.rfq);

export default function RfqPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Request a Quotation", path: "/request-a-quotation" },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Request a Quotation", href: "/request-a-quotation" },
        ]}
      />

      <section className="container-x py-12 sm:py-16">
        <SectionHeader
          eyebrow="Request a quotation"
          title="Tell us what you need"
          lead="Share your machinery, equipment or spare-parts requirement and attach any specifications. Our team will review it and prepare a tailored quotation."
          as="h1"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <RfqForm defaultCategory={searchParams.category} />

          <aside className="space-y-4">
            <div className="glass rounded-xl p-6">
              <h2 className="font-display text-base font-semibold text-white">Prefer to talk?</h2>
              <p className="mt-2 text-sm text-slate-400">Reach us directly:</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={telHref} className="flex items-center gap-3 text-slate-200 hover:text-accent-400">
                    <Phone className="h-4 w-4 text-accent-400" aria-hidden="true" />
                    {company.phone.display}
                  </a>
                </li>
                <li>
                  <a href={mailtoHref} className="flex items-center gap-3 text-slate-200 hover:text-accent-400">
                    <Mail className="h-4 w-4 text-accent-400" aria-hidden="true" />
                    {company.email}
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-200 hover:text-accent-400">
                    <MessageCircle className="h-4 w-4 text-accent-400" aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="glass-light rounded-xl p-6">
              <h3 className="font-display text-sm font-semibold text-white">What helps us quote faster</h3>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-400">
                <li>· Make, model or part reference (if known)</li>
                <li>· Quantity and required timeline</li>
                <li>· Technical drawings or datasheets (DWG, DXF, PDF)</li>
                <li>· Delivery location</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
