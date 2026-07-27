import type { Metadata } from "next";
import { company, addressLine } from "./company";

export const siteConfig = {
  name: company.shortName,
  legalName: company.legalName,
  url: company.url,
  // Default social share image (generated abstract industrial visual).
  ogImage: `${company.url}/images/og-default.jpg`,
  twitterHandle: undefined as string | undefined,
};

/**
 * Per-page SEO map. Keeps titles/descriptions unique and in one place.
 * Kept in sync with SEO_CHECKLIST.md keyword-to-page map.
 */
export const pageSeo = {
  home: {
    title: "Industrial Machinery & Equipment Supplier in Dubai, UAE",
    description:
      "STM MACHINERY supplies industrial machinery, CNC equipment, spare parts and complete factory solutions across the UAE and wider region. Request a quotation today.",
    path: "/",
  },
  about: {
    title: "About STM MACHINERY — Machinery Supplier in Dubai",
    description:
      "STM MACHINERY L.L.C. is a Dubai-based supplier of industrial machinery, equipment and spare parts, supporting factories and industrial projects across sectors.",
    path: "/about",
  },
  products: {
    title: "Products & Solutions — Industrial Machinery & Equipment",
    description:
      "Explore machinery and equipment categories STM MACHINERY supplies: CNC machinery, power equipment, oil & gas, pumps, valves, engines, medical, agricultural and more.",
    path: "/products-and-solutions",
  },
  industries: {
    title: "Industries We Serve — Machinery Supply for Every Sector",
    description:
      "STM MACHINERY supports manufacturing, energy, oil & gas, medical, agriculture, construction and industrial-plant sectors with machinery, equipment and spare parts.",
    path: "/industries",
  },
  factory: {
    title: "Factory From A–Z — Industrial Facility Procurement Support",
    description:
      "End-to-end procurement support for planning, equipping, expanding or upgrading a factory: requirement assessment, sourcing, supply, installation and after-sales.",
    path: "/factory-from-a-z",
  },
  services: {
    title: "Services & After-Sales Support — STM MACHINERY",
    description:
      "Spare-parts supply, preventive maintenance, installation coordination and technical support to keep your machinery running across its full lifecycle.",
    path: "/services",
  },
  rfq: {
    title: "Request a Quotation — Machinery & Equipment Enquiry",
    description:
      "Send your machinery, equipment or spare-parts requirement to STM MACHINERY. Attach technical specifications and receive a tailored quotation from our team.",
    path: "/request-a-quotation",
  },
  contact: {
    title: "Contact STM MACHINERY — Dubai, United Arab Emirates",
    description:
      "Contact STM MACHINERY in Dubai by phone, email or WhatsApp for machinery, industrial equipment, spare parts and factory-development enquiries.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy — STM MACHINERY",
    description:
      "How STM MACHINERY collects, uses and protects information submitted through enquiry forms and the website. Draft pending legal review.",
    path: "/privacy-policy",
  },
  cookies: {
    title: "Cookie Policy — STM MACHINERY",
    description:
      "How STM MACHINERY uses cookies and similar technologies on this website. Draft pending legal review.",
    path: "/cookie-policy",
  },
  terms: {
    title: "Website Terms of Use — STM MACHINERY",
    description:
      "The terms governing your use of the STM MACHINERY website. Draft pending legal review.",
    path: "/terms-of-use",
  },
  disclaimer: {
    title: "Disclaimer — STM MACHINERY",
    description:
      "Important information about the content published on the STM MACHINERY website. Draft pending legal review.",
    path: "/disclaimer",
  },
  thankYou: {
    title: "Thank You — STM MACHINERY",
    description: "Your enquiry has been received by STM MACHINERY.",
    path: "/thank-you",
  },
} as const;

type SeoEntry = { title: string; description: string; path: string };

/** Build a Next.js Metadata object for a page from a pageSeo entry. */
export function buildMetadata(entry: SeoEntry, opts?: { noIndex?: boolean }): Metadata {
  const canonical = `${company.url}${entry.path === "/" ? "" : entry.path}`;
  const fullTitle =
    entry.path === "/"
      ? `${company.shortName} — ${entry.title}`
      : `${entry.title} | ${company.shortName}`;

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical },
    robots: opts?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: entry.description,
      url: canonical,
      siteName: company.legalName,
      locale: "en_AE",
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: company.legalName }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: entry.description,
      images: [siteConfig.ogImage],
    },
  };
}

/** Organization + LocalBusiness structured data (JSON-LD). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: company.url,
    logo: `${company.url}/images/stm-logo.png`,
    email: company.email,
    telephone: company.phone.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressCountry: company.address.countryCode,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.legalName,
    image: `${company.url}/images/og-default.jpg`,
    url: company.url,
    telephone: company.phone.e164,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressCountry: company.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.address.lat,
      longitude: company.address.lng,
    },
    areaServed: "United Arab Emirates",
    description:
      "Supplier of industrial machinery, equipment, spare parts and factory-development support in Dubai, United Arab Emirates.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.legalName,
    url: company.url,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${company.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export { addressLine };
