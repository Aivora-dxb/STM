import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Reveal, JsonLd } from "@/components/ui/index";
import { buildMetadata, pageSeo, breadcrumbJsonLd } from "@/lib/seo";
import { company } from "@/lib/company";
import Link from "next/link";

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
          { name: "Who we are", path: "/about" },
        ])}
      />

      {/* ===== HERO: full-height engineer image on the right, copy overlapping on the left ===== */}
      <section className="relative overflow-hidden bg-navy-950">
        {/* Blueprint / grid / gear backdrop — decorative, low opacity */}
        <div aria-hidden="true" className="eng-grid pointer-events-none absolute inset-0 opacity-70" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(90deg,transparent,black)]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 40%, rgba(91,141,201,0.5) 0, transparent 55%)",
          }}
        />

        {/* Full-height hero image, right side, bleeding to the top/right edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/about/hero-engineer.jpg"
              alt=""
              fill
              sizes="52vw"
              className="object-cover object-center"
              priority
            />
            {/* Blend the image into the navy background on its left edge and base */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/45 to-navy-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />
          </div>
        </div>

        <div className="container-x relative">
          <div className="max-w-2xl py-12 sm:py-16 lg:min-h-[560px] lg:py-24">
            <Reveal>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6 text-sm">
                <ol className="flex items-center gap-2 text-slate-400">
                  <li>
                    <Link href="/" className="hover:text-accent-400">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-slate-600">
                    ›
                  </li>
                  <li className="text-slate-300" aria-current="page">
                    Who we are
                  </li>
                </ol>
              </nav>

              <p className="eyebrow mb-4">About us</p>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Who we are
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                <span className="font-semibold text-accent-400">STM MACHINERY L.L.C.</span>{" "}
                is a Dubai-based supplier of industrial machinery, manufacturing equipment
                and spare parts. We support industries that depend on reliable machinery and
                complete production capabilities.
              </p>
            </Reveal>
          </div>

          {/* Mobile/tablet hero image (shown below the copy where the side image is hidden) */}
          <Reveal delay={0.1}>
            <div className="relative mb-12 overflow-hidden rounded-2xl border border-white/10 shadow-glass lg:hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/about/hero-engineer.jpg"
                  alt="STM engineer inspecting industrial machinery on the factory floor"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/70 via-navy-900/20 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== MIDDLE: Our focus (wide) + Where we are (narrow) ===== */}
      <section className="relative bg-navy-950">
        <div aria-hidden="true" className="eng-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-x relative pb-6">
          <div className="grid gap-6 lg:grid-cols-5 lg:gap-7">
            {/* Our focus */}
            <Reveal className="lg:col-span-3">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                <div className="flex items-center gap-5">
                  <Image
                    src="/images/about/our-focus.png"
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 object-contain"
                  />
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    Our focus
                  </h2>
                </div>
                <p className="mt-6 text-base leading-relaxed text-slate-300">
                  We help manufacturers, factory owners, contractors and procurement teams
                  identify, source and procure the machinery and equipment their operations
                  require. Our role spans supply, sourcing, procurement coordination,
                  installation coordination and after-sales support — across sectors from
                  manufacturing and energy to oil &amp; gas, medical and agriculture.
                </p>
              </div>
            </Reveal>

            {/* Where we are */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                <div className="flex items-center gap-5">
                  <Image
                    src="/images/about/where-we-are.png"
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 object-contain"
                  />
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    Where we are
                  </h2>
                </div>
                <p className="mt-6 text-base leading-relaxed text-slate-300">
                  {company.address.line1}, {company.address.line2}, {company.address.city},{" "}
                  {company.address.country}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-400">
                  Based in Dubai and serving clients across the UAE and the wider region.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== LOWER: What we stand for ===== */}
      <section className="relative bg-navy-950">
        <div aria-hidden="true" className="eng-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-x relative py-16 sm:py-20">
          {/* Heading + divider line extending right */}
          <div className="flex items-center gap-6">
            <h2 className="shrink-0 font-display text-3xl font-bold text-white sm:text-4xl">
              What we stand for
            </h2>
            <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.05}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.04]">
                  <Image
                    src={`/images/about/${v.icon}.png`}
                    alt=""
                    width={44}
                    height={44}
                    className="mb-5 h-11 w-11 object-contain"
                  />
                  <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{v.body}</p>
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
