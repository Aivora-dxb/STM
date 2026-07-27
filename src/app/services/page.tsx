import type { Metadata } from "next";
import { Breadcrumb, SectionHeader, CtaBand, Reveal, JsonLd } from "@/components/ui/index";
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

      <section className="container-x py-12 sm:py-16">
        <SectionHeader
          eyebrow="Services & after-sales"
          title="Support through the equipment lifecycle"
          lead="Our involvement doesn't end at delivery. We support clients with spare parts, maintenance planning, installation coordination and technical support to keep machinery running."
          as="h1"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.05}>
              <div className="glass h-full rounded-xl p-6">
                <h2 className="font-display text-base font-semibold text-white">{s.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
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
