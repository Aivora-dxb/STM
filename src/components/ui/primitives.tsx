import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/** Section eyebrow + heading + optional lead paragraph. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  center,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</Tag>
      {lead && <p className="mt-4 text-base leading-relaxed text-slate-300">{lead}</p>}
    </div>
  );
}

/** Glass product-category card. */
/** Glass product-category card with a fitting background image. */
export function ProductCard({
  href,
  name,
  tagline,
  slug,
  delay = 0,
}: {
  href: string;
  name: string;
  tagline: string;
  slug?: string;
  delay?: number;
}) {
  const img = slug ? `/images/cat-${slug}.jpg` : undefined;
  return (
    <Reveal delay={delay} as="article">
      <Link
        href={href}
        className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/50"
      >
        {/* Background image */}
        {img && (
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${img})` }}
          />
        )}
        {/* Dark overlay for readability */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/25"
        />
        <span className="relative">
          <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent-400">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{tagline}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-400">
            View category
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </span>
      </Link>
    </Reveal>
  );
}

/** Compact industry chip/card. */
export function IndustryCard({ name, delay = 0 }: { name: string; delay?: number }) {
  return (
    <Reveal delay={delay} as="li">
      <div className="glass-light flex items-center gap-3 rounded-lg px-4 py-3.5">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
        <span className="text-sm font-medium text-slate-100">{name}</span>
      </div>
    </Reveal>
  );
}

/** Breadcrumb navigation. */
export function Breadcrumb({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-24">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-slate-300">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-accent-400">
                    {item.name}
                  </Link>
                  <ChevronRight className="h-3 w-3" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Reusable call-to-action band. */
export function CtaBand({
  title = "Have a machinery or equipment requirement?",
  body = "Send your specifications and our team will prepare a tailored quotation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-x py-16 sm:py-20">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-2xl px-6 py-12 text-center sm:px-12">
          <div className="eng-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">{body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/request-a-quotation" className="btn-primary">
                Request a quotation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Inline JSON-LD structured data. */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
