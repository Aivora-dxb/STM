import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { buildMetadata, pageSeo } from "@/lib/seo";
import { company, mailtoHref } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.terms);

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-semibold text-white">{children}</h2>;
}

export default function TermsPage() {
  return (
    <LegalPage title="Website Terms of Use" breadcrumb={{ name: "Terms of Use", href: "/terms-of-use" }}>
      <p>
        These Terms of Use govern your access to and use of the {company.legalName} website. By using
        this website, you agree to these terms. This is a draft prepared for review.
      </p>
      <H>Use of the website</H>
      <p>
        You may use this website for lawful purposes and to learn about and enquire into our
        products and services. You agree not to misuse the site, attempt to disrupt it, or use it in
        any way that infringes the rights of others.
      </p>
      <H>Content and accuracy</H>
      <p>
        We aim to keep information on this website accurate and current, but we make no warranty that
        all content is complete or error-free. Product information is indicative and does not form
        part of any contract unless confirmed in writing in a quotation or agreement.
      </p>
      <H>Intellectual property</H>
      <p>
        The content, layout and design of this website are the property of {company.legalName} or its
        licensors and may not be reproduced without permission. Third-party brand names shown belong
        to their respective owners.
      </p>
      <H>Limitation of liability</H>
      <p>
        To the extent permitted by law, {company.legalName} is not liable for any loss arising from
        the use of, or reliance on, this website.
      </p>
      <H>Governing law</H>
      <p>
        These terms are governed by the laws of the United Arab Emirates. This section should be
        confirmed during legal review.
      </p>
      <H>Contact</H>
      <p>
        Questions about these terms? Email{" "}
        <a href={mailtoHref} className="text-accent-400 underline">{company.email}</a>.
      </p>
    </LegalPage>
  );
}
