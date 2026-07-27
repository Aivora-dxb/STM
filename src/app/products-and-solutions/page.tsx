import type { Metadata } from "next";
import { Breadcrumb, SectionHeader, ProductCard, CtaBand, JsonLd } from "@/components/ui/index";
import { productCategories } from "@/content/catalog";
import { buildMetadata, pageSeo, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeo.products);

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products & Solutions", path: "/products-and-solutions" },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Products & Solutions", href: "/products-and-solutions" },
        ]}
      />

      <section className="container-x py-12 sm:py-16">
        <SectionHeader
          eyebrow="Products & solutions"
          title="Industrial machinery and equipment we supply"
          lead="STM MACHINERY sources and supplies machinery, equipment and spare parts across the categories below. Share your requirement and we will help identify and procure suitable equipment."
          as="h1"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat, i) => (
            <ProductCard
              key={cat.slug}
              href={`/products-and-solutions/${cat.slug}`}
              name={cat.name}
              tagline={cat.tagline}
              delay={(i % 3) * 0.05}
            />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
