import type { MetadataRoute } from "next";
import { company } from "@/lib/company";
import { productCategories } from "@/content/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const now = new Date();

  const staticPaths = [
    "", "/about", "/products-and-solutions", "/industries",
    "/factory-from-a-z", "/services", "/request-a-quotation", "/contact",
    "/privacy-policy", "/cookie-policy", "/terms-of-use", "/disclaimer",
  ];

  const staticEntries = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const categoryEntries = productCategories.map((c) => ({
    url: `${base}/products-and-solutions/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...categoryEntries];
}
