import type { Metadata } from "next";
import { Breadcrumb, SectionHeader, CtaBand, JsonLd } from "@/components/ui/index";
import { FactoryStageCard } from "@/components/sections/factory-stage-card";
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

        {/* Process steps with photo backgrounds */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {factoryStages.map((stage, i) => (
            <FactoryStageCard key={stage.step} stage={stage} delay={(i % 3) * 0.05} />
          ))}
        </div>

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
