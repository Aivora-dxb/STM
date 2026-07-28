import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { mainNav, footerLegal } from "@/content/nav";
import { company, telHref, mailtoHref, whatsappUrl, mapsUrl } from "@/lib/company";
import { Logo } from "@/components/ui/logo";

/**
 * Light footer — pairs with the light header. The dark navy logo and dark text
 * sit on a light slate background so the brand reads clearly (the page body
 * above remains dark; only the header and footer chrome are light).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D8E1EB] bg-[#EDF2F7] text-[#526174]" aria-label="Site footer">
      <div className="container-x grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
        <div>
          <Logo className="w-[150px]" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#526174]">
            Supplier of industrial machinery, equipment, spare parts and factory-development
            support in Dubai, United Arab Emirates.
          </p>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <h2 className="mb-4 font-display text-sm font-semibold text-[#102238]">Explore</h2>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#526174] hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request-a-quotation" className="text-[#526174] hover:text-accent">
                Request a Quotation
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <h2 className="mb-4 font-display text-sm font-semibold text-[#102238]">Contact</h2>
          <ul className="space-y-3 text-[#526174]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {company.address.line1}, {company.address.line2}, {company.address.city},{" "}
                {company.address.country}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={telHref} className="hover:text-accent">
                {company.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={mailtoHref} className="hover:text-accent">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Legal" className="text-sm">
          <h2 className="mb-4 font-display text-sm font-semibold text-[#102238]">Legal</h2>
          <ul className="space-y-2">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#526174] hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-[#D8E1EB] bg-[#E4EBF3]">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-[#526174] sm:flex-row">
          <p>
            © {year} {company.legalName} All rights reserved.
          </p>
          <p>Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
