import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

      {/* Company intro — single supplier */}
      <section className="relative overflow-hidden">
        {/* Faint technical blueprint / gear backdrop, concentrated at the edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.10] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_35%,black_100%)]"
          style={{ backgroundImage: "url(/images/home/blueprint-bg.jpg)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/40 to-transparent"
        />

        <div className="container-x relative py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: intro copy */}
            <Reveal>
              <div className="max-w-xl">
                <p className="eyebrow mb-3">Who we are</p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  A single supplier for machinery, equipment and factory projects
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-300">
                  <span className="font-semibold text-accent-400">
                    STM MACHINERY L.L.C.
                  </span>{" "}
                  is a Dubai-based supplier of industrial machinery, equipment and spare
                  parts. We help manufacturers, factory owners and industrial companies
                  specify, source and procure the equipment they need — and support them
                  through installation coordination and after-sales.
                </p>
                <Link
                  href="/about"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 link-underline"
                >
                  More about STM MACHINERY
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            {/* Right: 2×2 icon cards */}
            <Reveal delay={0.1}>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {whyStm.map((w) => (
                  <li
                    key={w.title}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent-400/40 hover:bg-white/[0.05]"
                  >
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-400/20 bg-accent-500/5">
                      <Image
                        src={`/images/home/${w.icon}.png`}
                        alt=""
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                    </span>
                    <h3 className="font-display text-base font-semibold text-white">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {w.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
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
