import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Breadcrumb, SectionHeader, JsonLd } from "@/components/ui/index";
import { buildMetadata, pageSeo, breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { company, telHref, mailtoHref, whatsappUrl, mapsUrl } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
        localBusinessJsonLd(),
      ]} />
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

      <section className="container-x py-12 sm:py-16">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch"
          lead="Reach our team by phone, email or WhatsApp — or send a detailed enquiry through our quotation form."
          as="h1"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={telHref} data-analytics="tel-click"
              className="glass flex flex-col gap-2 rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-accent-400/40">
              <Phone className="h-5 w-5 text-accent-400" aria-hidden="true" />
              <span className="font-display text-sm font-semibold text-white">Call us</span>
              <span className="text-sm text-slate-400">{company.phone.display}</span>
            </a>
            <a href={mailtoHref} data-analytics="email-click"
              className="glass flex flex-col gap-2 rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-accent-400/40">
              <Mail className="h-5 w-5 text-accent-400" aria-hidden="true" />
              <span className="font-display text-sm font-semibold text-white">Email us</span>
              <span className="break-all text-sm text-slate-400">{company.email}</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp-click"
              className="glass flex flex-col gap-2 rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-accent-400/40">
              <MessageCircle className="h-5 w-5 text-accent-400" aria-hidden="true" />
              <span className="font-display text-sm font-semibold text-white">WhatsApp</span>
              <span className="text-sm text-slate-400">Chat with our team</span>
            </a>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
              className="glass flex flex-col gap-2 rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-accent-400/40">
              <MapPin className="h-5 w-5 text-accent-400" aria-hidden="true" />
              <span className="font-display text-sm font-semibold text-white">Visit us</span>
              <span className="text-sm text-slate-400">{company.address.line2}, {company.address.city}</span>
            </a>
          </div>

          <div className="glass flex flex-col justify-between rounded-xl p-7">
            <div>
              <h2 className="font-display text-lg font-semibold text-white">Address</h2>
              <address className="mt-3 not-italic text-sm leading-relaxed text-slate-300">
                {company.legalName}<br />
                {company.address.line1}<br />
                {company.address.line2}<br />
                {company.address.city}, {company.address.country}
              </address>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 link-underline">
                Open in Google Maps
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <Link href="/request-a-quotation" className="btn-primary mt-8 w-full">
              Request a quotation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
