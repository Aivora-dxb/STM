import type { Metadata } from "next";
import { Breadcrumb, SectionHeader, IndustryCard, CtaBand, JsonLd } from "@/components/ui/index";
import { industries } from "@/content/catalog";
import { buildMetadata, pageSeo, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeo.industries);

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }]} />

      <section className="container-x py-12 sm:py-16">
        <SectionHeader
          eyebrow="Industries we serve"
          title="Machinery solutions across sectors"
          lead="STM MACHINERY supplies machinery, equipment and spare parts to a broad range of industries. If your sector requires machinery, we can help you supply, install and support it."
          as="h1"
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.slug} name={ind.name} delay={(i % 4) * 0.04} />
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-slate-400">
          Don&apos;t see your sector listed? We work across industrial procurement broadly —
          tell us your requirement and we&apos;ll advise on what we can source and supply.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
