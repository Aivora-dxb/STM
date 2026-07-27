import type { Metadata } from "next";
import { Breadcrumb, SectionHeader, CtaBand, Reveal, JsonLd } from "@/components/ui/index";
import { factoryStages } from "@/content/catalog";
import { buildMetadata, pageSeo, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeo.factory);

export default function FactoryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Factory From A–Z", path: "/factory-from-a-z" },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Factory From A–Z", href: "/factory-from-a-z" },
        ]}
      />

      <section className="container-x py-12 sm:py-16">
        <SectionHeader
          eyebrow="Factory From A–Z"
          title="Support across your factory project"
          lead="Whether you are planning a new facility, expanding capacity or upgrading equipment, we coordinate the machinery side of the project — from first assessment to after-sales. Scope and third-party involvement vary by project."
          as="h1"
        />

        {/* Process timeline */}
        <ol className="mt-12 space-y-4">
          {factoryStages.map((stage, i) => (
            <Reveal key={stage.step} delay={(i % 4) * 0.04} as="li">
              <div className="glass flex gap-5 rounded-xl p-6">
                <span
                  className="font-display text-2xl font-bold text-accent-400/60"
                  aria-hidden="true"
                >
                  {stage.step}
                </span>
                <div>
                  <h2 className="font-display text-base font-semibold text-white">{stage.name}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{stage.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="glass-light mt-10 rounded-xl p-6">
          <p className="text-sm leading-relaxed text-slate-300">
            <strong className="text-white">A note on scope:</strong> STM MACHINERY supplies,
            sources and coordinates procurement, installation and after-sales. Specialist
            engineering, design or commissioning work is coordinated with qualified partners
            where required and is subject to project-specific arrangements, scope and availability.
          </p>
        </div>
      </section>

      <CtaBand
        title="Planning a factory project?"
        body="Tell us what you're building or upgrading and we'll help you scope the machinery."
      />
    </>
  );
}
