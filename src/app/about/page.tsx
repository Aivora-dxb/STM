import type { Metadata } from "next";
import { MapPin, ShieldCheck, Handshake, Wrench } from "lucide-react";
import { Breadcrumb, SectionHeader, CtaBand, Reveal, JsonLd } from "@/components/ui/index";
import { buildMetadata, pageSeo, breadcrumbJsonLd } from "@/lib/seo";
import { company } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.about);

const values = [
  {
    icon: ShieldCheck,
    title: "Quality & reliability",
    body: "We supply machinery and equipment chosen to perform and to last in demanding industrial settings.",
  },
  {
    icon: Wrench,
    title: "Practical expertise",
    body: "We focus on helping clients specify and source the right equipment for their process and output.",
  },
  {
    icon: Handshake,
    title: "Customer partnership",
    body: "From procurement to after-sales, we work alongside our clients through the equipment lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "Transparent processes and honest commitments in every enquiry and quotation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />

      <section className="container-x py-12 sm:py-16">
        <SectionHeader
          eyebrow="About us"
          title="Who we are"
          lead="STM MACHINERY L.L.C. is a Dubai-based supplier of industrial machinery, manufacturing equipment and spare parts. We support industries that depend on reliable machinery and complete production capabilities."
          as="h1"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="glass rounded-xl p-7">
              <h2 className="font-display text-xl font-semibold text-white">Our focus</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                We help manufacturers, factory owners, contractors and procurement teams
                identify, source and procure the machinery and equipment their operations
                require. Our role spans supply, sourcing, procurement coordination,
                installation coordination and after-sales support — across sectors from
                manufacturing and energy to oil &amp; gas, medical and agriculture.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Rather than pushing a fixed catalogue, we work from your requirement:
                the parts you produce, the tolerances you hold, the capacity you need,
                and the constraints of your site. We then coordinate supply from
                established manufacturers and support the equipment through its life.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col justify-between rounded-xl p-7">
              <div>
                <h2 className="font-display text-xl font-semibold text-white">Where we are</h2>
                <p className="mt-3 flex items-start gap-2 text-sm text-slate-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                  <span>
                    {company.address.line1}, {company.address.line2}, {company.address.city},{" "}
                    {company.address.country}
                  </span>
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                Based in Dubai and serving clients across the UAE and the wider region.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-white">What we stand for</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.05}>
                <div className="glass h-full rounded-xl p-6">
                  <v.icon className="h-6 w-6 text-accent-400" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-base font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's discuss your requirement"
        body="Tell us what you need to supply, replace or equip — we'll take it from there."
      />
    </>
  );
}
