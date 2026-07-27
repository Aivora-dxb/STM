import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { buildMetadata, pageSeo } from "@/lib/seo";
import { company, mailtoHref } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.cookies);

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-semibold text-white">{children}</h2>;
}

export default function CookiePage() {
  return (
    <LegalPage title="Cookie Policy" breadcrumb={{ name: "Cookie Policy", href: "/cookie-policy" }}>
      <p>
        This Cookie Policy explains how {company.legalName} uses cookies and similar technologies on
        this website. This is a draft prepared for review.
      </p>
      <H>What cookies are</H>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the
        site function and can provide information to the site owner.
      </p>
      <H>How we use them</H>
      <p>
        This website is built to work with minimal cookies. Where analytics are enabled, we may use
        analytics cookies to understand aggregate usage and improve the site. We do not use cookies
        to build advertising profiles.
      </p>
      <H>Managing cookies</H>
      <p>
        You can control and delete cookies through your browser settings. Disabling some cookies may
        affect how parts of the site work.
      </p>
      <H>Contact</H>
      <p>
        Questions about this policy? Email{" "}
        <a href={mailtoHref} className="text-accent-400 underline">{company.email}</a>.
      </p>
    </LegalPage>
  );
}
