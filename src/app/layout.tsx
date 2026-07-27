import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { JsonLd } from "@/components/ui/primitives";
import { company } from "@/lib/company";
import {
  organizationJsonLd,
  localBusinessJsonLd,
  websiteJsonLd,
  siteConfig,
} from "@/lib/seo";

// Self-hosted fonts (no third-party request; better performance & privacy).
// Body: Inter — neutral, highly legible.
const body = localFont({
  src: [
    { path: "../fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// Display: Rajdhani — a squared, technical face suited to engineering/machinery.
const display = localFont({
  src: [
    { path: "../fonts/rajdhani-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/rajdhani-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/rajdhani-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.shortName} — Industrial Machinery & Equipment Supplier in Dubai`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "STM MACHINERY supplies industrial machinery, equipment, spare parts and complete factory solutions across the UAE and wider region.",
  applicationName: company.legalName,
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: company.legalName,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <JsonLd data={[organizationJsonLd(), localBusinessJsonLd(), websiteJsonLd()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
