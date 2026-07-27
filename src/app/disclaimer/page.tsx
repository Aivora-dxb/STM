import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { buildMetadata, pageSeo } from "@/lib/seo";
import { company, mailtoHref } from "@/lib/company";

export const metadata: Metadata = buildMetadata(pageSeo.disclaimer);

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-semibold text-white">{children}</h2>;
}

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" breadcrumb={{ name: "Disclaimer", href: "/disclaimer" }}>
      <p>
        The information provided on the {company.legalName} website is for general informational
        purposes. This is a draft prepared for review.
      </p>
      <H>Product and service information</H>
      <p>
        Descriptions of products, equipment categories and services are indicative. Specifications,
        availability and suitability for a particular use are confirmed on a per-enquiry basis in a
        written quotation or agreement. Images may be illustrative and may not depict actual
        inventory, projects or facilities.
      </p>
      <H>Third-party brands</H>
      <p>
        Brand names referenced on this website belong to their respective owners and are used to
        indicate the equipment we source and supply. Their use does not imply any endorsement beyond
        the supply relationship described.
      </p>
      <H>External links</H>
      <p>
        This website may link to third-party websites. We are not responsible for the content or
        practices of those sites.
      </p>
      <H>No warranty</H>
      <p>
        While we take care to provide accurate information, we make no warranties, express or
        implied, about the completeness or accuracy of the content.
      </p>
      <H>Contact</H>
      <p>
        Questions? Email{" "}
        <a href={mailtoHref} className="text-accent-400 underline">{company.email}</a>.
      </p>
    </LegalPage>
  );
}
