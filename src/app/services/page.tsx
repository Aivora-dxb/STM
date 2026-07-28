import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, CtaBand, Reveal, JsonLd } from "@/components/ui/index";
import { services } from "@/content/catalog";
import { buildMetadata, pageSeo, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeo.services);

const faqs = [
  {
    q: "Do you supply spare parts for machines you didn't sell?",
    a: "Yes. Share the make, model or part reference and we will help identify and source the components you need.",
  },
  {
    q: "Can you coordinate installation?",
    a: "We coordinate installation and integration, working with specialist partners where required. Scope depends on the project and equipment.",
  },
  {
    q: "Which regions do you serve?",
    a: "We are based in Dubai and serve clients across the United Arab Emirates and the wider region.",
  },
  {
    q: "How do I request a quotation?",
    a: "Use our Request a Quotation form to send your requirement and any technical specifications, or contact us by phone, email or WhatsApp.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />

      {/* Hero banner with photo */}
      <div className="relative mt-4 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/services/hero.jpg)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30"
        />
        <div className="container-x relative py-16 sm:py-24">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Services &amp; after-sales</p>
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
              Support through the equipment lifecycle
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
              Our involvement doesn&apos;t end at delivery. We support clients with spare parts,
              maintenance planning, installation coordination and technical support to keep
              machinery running.
            </p>
          </div>
        </div>
      </div>

      <section className="container-x py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.05}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.04]">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-accent-400/20 bg-accent-500/5">
                  <Image
                    src={`/images/services/${s.icon}.png`}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </span>
                <h2 className="font-display text-lg font-semibold text-white">{s.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white/[0.03]">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 font-display text-base font-medium text-white marker:content-none">
                  {f.q}
                  <span className="text-accent-400 transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need parts or support?"
        body="Send us the machine make, model or part reference and we'll help you source it."
      />
    </>
  );
}
