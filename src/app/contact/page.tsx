import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Breadcrumb, JsonLd } from "@/components/ui/index";
import { buildMetadata, pageSeo, breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { company, telHref, mailtoHref, whatsappUrl, mapsUrl } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.contact);

const cards = [
  {
    href: telHref,
    icon: "call",
    title: "Call us",
    lines: [company.phone.display, company.hours.short],
    analytics: "tel-click",
    external: false,
  },
  {
    href: mailtoHref,
    icon: "email",
    title: "Email us",
    lines: [company.email, "We aim to reply within 1 business day."],
    analytics: "email-click",
    external: false,
    breakAll: true,
  },
  {
    href: whatsappUrl,
    icon: "whatsapp",
    title: "WhatsApp",
    lines: ["Chat with our team", company.hours.short],
    analytics: "whatsapp-click",
    external: true,
    whatsapp: true,
  },
  {
    href: mapsUrl,
    icon: "visit",
    title: "Visit us",
    lines: [`${company.address.line2},`, `${company.address.city}, ${company.address.country}`],
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          localBusinessJsonLd(),
        ]}
      />
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

      <section className="relative overflow-hidden">
        {/* Decorative world-map / global-network graphic, upper-right, very low opacity */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-10 hidden h-[420px] w-[760px] bg-contain bg-right-top bg-no-repeat opacity-[0.12] md:block [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]"
          style={{ backgroundImage: "url(/images/contact/world-map.jpg)" }}
        />

        <div className="container-x relative py-12 sm:py-16">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Contact</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in touch
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Reach our team by phone, email or WhatsApp — or send a detailed enquiry
              through our quotation form.
            </p>
          </div>

          {/* Main content */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Left: 2×2 contact cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...("analytics" in c && c.analytics ? { "data-analytics": c.analytics } : {})}
                  className={[
                    "group relative flex h-full flex-col rounded-2xl border bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]",
                    "whatsapp" in c && c.whatsapp
                      ? "border-emerald-400/25 hover:border-emerald-400/50"
                      : "border-white/10 hover:border-accent-400/40",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-xl border",
                      "whatsapp" in c && c.whatsapp
                        ? "border-emerald-400/20 bg-emerald-500/5"
                        : "border-accent-400/20 bg-accent-500/5",
                    ].join(" ")}
                  >
                    <Image
                      src={`/images/contact/${c.icon}.png`}
                      alt=""
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                  <span className="font-display text-base font-semibold text-white">
                    {c.title}
                  </span>
                  <span
                    className={[
                      "mt-1.5 text-sm text-slate-400",
                      "breakAll" in c && c.breakAll ? "break-all" : "",
                    ].join(" ")}
                  >
                    {c.lines[0]}
                  </span>
                  {c.lines[1] && (
                    <span className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      {c.lines[1]}
                    </span>
                  )}
                  <ArrowUpRight
                    className="absolute right-5 top-5 h-4 w-4 text-slate-500 transition-colors group-hover:text-accent-400"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>

            {/* Right: larger address card */}
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-400/20 bg-accent-500/5">
                  <Image
                    src="/images/contact/address.png"
                    alt=""
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] object-contain"
                  />
                </span>
                <h2 className="font-display text-lg font-semibold text-white">Address</h2>
              </div>

              <address className="mt-4 not-italic text-sm leading-relaxed text-slate-300">
                {company.legalName}
                <br />
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.city}, {company.address.country}
              </address>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 link-underline"
              >
                Open in Google Maps
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              {/* Map preview */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open STM MACHINERY location in Google Maps"
                className="group mt-5 block overflow-hidden rounded-xl border border-white/10"
              >
                <span className="relative block aspect-[605/212] w-full">
                  <Image
                    src="/images/contact/map-preview.jpg"
                    alt="Map showing STM MACHINERY location in Dubai Investment Park Second"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 ring-1 ring-inset ring-accent-400/10"
                  />
                </span>
              </a>

              {/* Working hours */}
              <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-400/20 bg-accent-500/5">
                  <Image
                    src="/images/contact/hours.png"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">Working hours</p>
                  <p className="mt-1 text-sm text-slate-400">{company.hours.display}</p>
                </div>
              </div>

              <Link href="/request-a-quotation" className="btn-primary mt-7 w-full">
                Request a quotation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
