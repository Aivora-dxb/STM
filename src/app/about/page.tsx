import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, CtaBand, Reveal, JsonLd } from "@/components/ui/index";
import { buildMetadata, pageSeo, breadcrumbJsonLd } from "@/lib/seo";
import { company } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.about);

const values = [
  {
    icon: "quality",
    title: "Quality & reliability",
    body: "We supply machinery and equipment chosen to perform and to last in demanding industrial settings.",
  },
  {
    icon: "practical-expertise",
    title: "Practical expertise",
    body: "We focus on helping clients specify and source the right equipment for their process and output.",
  },
  {
    icon: "customer-partnership",
    title: "Customer partnership",
    body: "From procurement to after-sales, we work alongside our clients through the equipment lifecycle.",
  },
  {
    icon: "integrity",
    title: "Integrity",
    body: "Transparent processes and honest commitments in every enquiry and quotation.",
  },
] as const;

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

      {/* ===== Top section: intro + hero image ===== */}
      <section className="relative overflow-hidden">
        {/* Faint blueprint / grid backdrop */}
        <div
          aria-hidden="true"
          className="eng-grid pointer-events-none absolute inset-0 opacity-[0.6]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-3xl"
        />

        <div className="container-x relative py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: copy */}
            <Reveal>
              <div className="max-w-xl">
                <p className="eyebrow mb-3">About us</p>
                <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Who we are
                </h1>
                <p className="mt-5 text-base leading-relaxed text-slate-300">
                  <span className="font-semibold text-accent-400">
                    STM MACHINERY L.L.C.
                  </span>{" "}
                  is a Dubai-based supplier of industrial machinery, manufacturing
                  equipment and spare parts. We support industries that depend on
                  reliable machinery and complete production capabilities.
                </p>
              </div>
            </Reveal>

            {/* Right: hero image with dark-blue overlay */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-glass">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/about/hero-engineer.jpg"
                    alt="STM engineer inspecting industrial machinery on the factory floor"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  {/* Dark blue overlay to integrate with the site */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-navy-950/80 via-navy-900/30 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent-400/10"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Middle section: focus + location ===== */}
      <section className="container-x pb-4">
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass h-full rounded-2xl p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-500/10">
                  <Image
                    src="/images/about/our-focus.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </span>
                <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  Our focus
                </h2>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                We help manufacturers, factory owners, contractors and procurement
                teams identify, source and procure the machinery and equipment their
                operations require. Our role spans supply, sourcing, procurement
                coordination, installation coordination and after-sales support —
                across sectors from manufacturing and energy to oil &amp; gas, medical
                and agriculture.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass flex h-full flex-col rounded-2xl p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-500/10">
                  <Image
                    src="/images/about/where-we-are.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </span>
                <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  Where we are
                </h2>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                {company.address.line1}, {company.address.line2},{" "}
                {company.address.city}, {company.address.country}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Based in Dubai and serving clients across the UAE and the wider region.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Bottom section: values ===== */}
      <section className="container-x py-14 sm:py-16">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          What we stand for
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 0.05}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.04]">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-500/10">
                  <Image
                    src={`/images/about/${v.icon}.png`}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                </span>
                <h3 className="font-display text-base font-semibold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Let's discuss your requirement"
        body="Tell us what you need to supply, replace or equip — we'll take it from there."
      />
    </>
  );
}
