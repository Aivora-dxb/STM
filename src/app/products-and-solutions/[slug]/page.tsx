import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumb, Reveal, JsonLd } from "@/components/ui/index";
import { productCategories } from "@/content/catalog";
import { company } from "@/lib/company";
import { breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = getCategory(params.slug);
  if (!cat) return {};
  const canonical = `${company.url}/products-and-solutions/${cat.slug}`;
  const title = `${cat.name} Supplier in Dubai, UAE`;
  const description = `${cat.intro.slice(0, 150)}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title: `${title} | ${company.shortName}`, description, url: canonical },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategory(params.slug);
  if (!cat) notFound();

  const related = productCategories.filter((c) => c.slug !== cat.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products & Solutions", path: "/products-and-solutions" },
            { name: cat.name, path: `/products-and-solutions/${cat.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: cat.name,
            provider: { "@type": "Organization", name: company.legalName },
            areaServed: "United Arab Emirates",
            description: cat.intro,
          },
        ]}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Products & Solutions", href: "/products-and-solutions" },
          { name: cat.name, href: `/products-and-solutions/${cat.slug}` },
        ]}
      />

      <article className="container-x py-12 sm:py-16">
        <p className="eyebrow mb-3">{cat.tagline}</p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {cat.name}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300">{cat.intro}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-lg font-semibold text-white">What we supply</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-lg font-semibold text-white">Typical applications</h2>
            <ul className="mt-4 space-y-2">
              {cat.applications.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Enquiry aside */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="glass rounded-xl p-6">
              <h2 className="font-display text-base font-semibold text-white">
                Request a quotation
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Share your specifications, make and model, or the parts you need. We will
                help identify suitable equipment and prepare a quotation.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Link
                  href={`/request-a-quotation?category=${encodeURIComponent(cat.name)}`}
                  className="btn-primary w-full"
                >
                  Request a quotation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="btn-secondary w-full">
                  Send technical specifications
                </Link>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-eyebrow text-slate-400">
                Relevant industries
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.industries.map((ind) => (
                  <li key={ind} className="glass-light rounded-full px-3 py-1 text-xs text-slate-200">
                    {ind}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Related categories */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <h2 className="font-display text-lg font-semibold text-white">Related categories</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.05} as="article">
                <Link
                  href={`/products-and-solutions/${r.slug}`}
                  className="glass group block rounded-xl p-5 transition-all hover:-translate-y-1 hover:border-accent-400/40"
                >
                  <h3 className="font-display text-base font-semibold text-white group-hover:text-accent-400">
                    {r.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400">{r.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
