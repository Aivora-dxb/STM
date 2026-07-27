import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { mainNav, footerLegal } from "@/content/nav";
import { company, telHref, mailtoHref, whatsappUrl, mapsUrl } from "@/lib/company";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950" aria-label="Site footer">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Supplier of industrial machinery, equipment, spare parts and factory-development
            support in Dubai, United Arab Emirates.
          </p>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <h2 className="mb-4 font-display text-sm font-semibold text-white">Explore</h2>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 hover:text-accent-400">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request-a-quotation" className="text-slate-400 hover:text-accent-400">
                Request a Quotation
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <h2 className="mb-4 font-display text-sm font-semibold text-white">Contact</h2>
          <ul className="space-y-3 text-slate-400">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-400">
                {company.address.line1}, {company.address.line2}, {company.address.city},{" "}
                {company.address.country}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={telHref} className="hover:text-accent-400">
                {company.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={mailtoHref} className="hover:text-accent-400">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-400">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Legal" className="text-sm">
          <h2 className="mb-4 font-display text-sm font-semibold text-white">Legal</h2>
          <ul className="space-y-2">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 hover:text-accent-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
