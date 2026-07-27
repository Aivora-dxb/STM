import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { buildMetadata, pageSeo } from "@/lib/seo";
import { company, mailtoHref } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.privacy);

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-semibold text-white">{children}</h2>;
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" breadcrumb={{ name: "Privacy Policy", href: "/privacy-policy" }}>
      <p>
        This Privacy Policy explains how {company.legalName} (&quot;STM MACHINERY&quot;, &quot;we&quot;,
        &quot;us&quot;) collects, uses and protects information you provide through this website. This
        is a draft prepared for review and does not constitute legal advice.
      </p>

      <H>Information we collect</H>
      <p>
        When you submit our Request a Quotation or contact forms, we collect the information you
        provide: your name, company, email address, phone number, country, industry, the equipment
        or requirement you describe, your preferred contact method, and any files you choose to
        attach. We may also collect standard technical information such as your approximate location
        and browser type through analytics, where enabled.
      </p>

      <H>Why we collect it</H>
      <p>
        We use this information solely to respond to your enquiry, prepare quotations, provide the
        products and services you request, and communicate with you about your requirement. We do
        not sell your personal information.
      </p>

      <H>How attachments are handled</H>
      <p>
        Files you attach to an enquiry are transmitted to our team by email so that we can review
        your specifications. Please avoid submitting confidential information you do not wish to
        share. We retain enquiry information only as long as needed to handle your request and for
        legitimate business records.
      </p>

      <H>How we may contact you</H>
      <p>
        We may contact you using the details you provide and your preferred contact method (email,
        phone or WhatsApp) in connection with your enquiry.
      </p>

      <H>Analytics and cookies</H>
      <p>
        Where enabled, we may use analytics tools to understand how visitors use our website and to
        improve it. See our Cookie Policy for details. You can control cookies through your browser
        settings.
      </p>

      <H>Your rights</H>
      <p>
        You may request access to, correction of, or deletion of the personal information we hold
        about you, subject to applicable law. To make a request, contact us using the details below.
      </p>

      <H>Contact</H>
      <p>
        For privacy enquiries, email{" "}
        <a href={mailtoHref} className="text-accent-400 underline">{company.email}</a>.
      </p>
    </LegalPage>
  );
}
