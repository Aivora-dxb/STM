"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { mainNav } from "@/content/nav";
import { company, telHref, mailtoHref } from "@/lib/company";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-[#D8E1EB] bg-[#F3F6FA]/95 backdrop-blur transition-shadow",
        scrolled && "shadow-[0_4px_16px_rgba(16,34,56,0.08)]",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label={`${company.shortName} home`} className="flex items-center">
          <Logo className="w-[136px] sm:w-[150px]" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                  active
                    ? "text-accent after:w-full"
                    : "text-[#102238] hover:text-accent after:w-0",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telHref}
            className="flex items-center gap-2 text-sm font-medium text-[#526174] hover:text-accent"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="sr-only">Call </span>
            {company.phone.display}
          </a>
          <Link
            href="/request-a-quotation"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Request a quotation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#102238] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F6FA] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="animate-fade-down border-t border-[#D8E1EB] bg-[#F3F6FA] lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-4">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    active
                      ? "bg-accent/10 text-accent"
                      : "text-[#102238] hover:bg-[#E4EBF3]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-2 border-t border-[#D8E1EB] pt-4">
              <Link
                href="/request-a-quotation"
                className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Request a quotation
              </Link>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#D8E1EB] px-4 py-2.5 text-sm font-semibold text-[#526174] hover:border-accent hover:text-accent"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> {company.phone.display}
              </a>
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#D8E1EB] px-4 py-2.5 text-sm font-semibold text-[#526174] hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> {company.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
