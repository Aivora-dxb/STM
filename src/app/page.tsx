import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { FactoryStageCard } from "@/components/sections/factory-stage-card";
import {
  SectionHeader,
  ProductCard,
  IndustryCard,
  CtaBand,
  Reveal,
} from "@/components/ui/index";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { productCategories, industries, factoryStages, whyStm } from "@/content/catalog";
import { buildMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Company intro */}
      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow mb-3">Who we are</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A single supplier for machinery, equipment and factory projects
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300">
                STM MACHINERY L.L.C. is a Dubai-based supplier of industrial machinery,
                equipment and spare parts. We help manufacturers, factory owners and
                industrial companies specify, source and procure the equipment they need —
                and support them through installation coordination and after-sales.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 link-underline"
              >
                More about STM MACHINERY
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-2 gap-3">
              {whyStm.map((w) => (
                <li key={w.title} className="glass rounded-lg p-4">
                  <p className="font-display text-sm font-semibold text-white">{w.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{w.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Products & solutions */}
      <section className="container-x py-16 sm:py-20">
        <SectionHeader
          eyebrow="Products & solutions"
          title="Machinery and equipment we supply"
          lead="Organised into clear categories for industrial procurement. Every category includes a quotation and technical-enquiry path."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat, i) => (
            <ProductCard
              key={cat.slug}
              href={`/products-and-solutions/${cat.slug}`}
              slug={cat.slug}
              name={cat.name}
              tagline={cat.tagline}
              delay={(i % 3) * 0.05}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/products-and-solutions" className="btn-secondary">
            View all products & solutions
          </Link>
        </div>
      </section>

      {/* Industries */}
      <section className="eng-grid border-y border-white/5">
        <div className="container-x py-16 sm:py-20">
          <SectionHeader
            eyebrow="Industries we serve"
            title="Machinery solutions across sectors"
            lead="If your industry requires machinery, we can help you supply, install and support it."
          />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <IndustryCard key={ind.slug} name={ind.name} icon={ind.icon} delay={(i % 4) * 0.04} />
            ))}
          </ul>
        </div>
      </section>

      {/* Factory From A–Z */}
      <section className="container-x py-16 sm:py-20">
        <SectionHeader
          eyebrow="Factory From A–Z"
          title="Support across your factory project"
          lead="From requirement assessment to after-sales, we coordinate the machinery side of establishing, expanding or upgrading a facility."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {factoryStages.map((stage, i) => (
            <FactoryStageCard key={stage.step} stage={stage} delay={(i % 3) * 0.05} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/factory-from-a-z" className="btn-secondary">
            Explore Factory From A–Z
          </Link>
        </div>
      </section>

      {/* Partners */}
      <PartnerStrip />

      <CtaBand />
    </>
  );
}
