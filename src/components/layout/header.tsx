"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { mainNav } from "@/content/nav";
import { company, telHref } from "@/lib/company";
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

  // Close mobile menu on route change and lock scroll while open
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
        "glass-nav fixed inset-x-0 top-0 z-50 transition-shadow",
        scrolled && "shadow-glass-sm",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label={`${company.shortName} home`} className="flex items-center">
          <Logo className="h-8 w-auto" />
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
                  "link-underline text-sm font-medium transition-colors",
                  active ? "text-accent-400" : "text-slate-200 hover:text-white",
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
            className="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Call </span>
            {company.phone.display}
          </a>
          <Link href="/request-a-quotation" className="btn-primary !px-4 !py-2 text-xs">
            Request a quotation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-100 lg:hidden"
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
          className="glass-nav border-t border-white/10 lg:hidden"
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
                    "rounded-md px-3 py-3 text-base font-medium",
                    active ? "bg-white/10 text-accent-400" : "text-slate-100 hover:bg-white/5",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
              <a href={telHref} className="btn-secondary w-full">
                <Phone className="h-4 w-4" aria-hidden="true" /> {company.phone.display}
              </a>
              <Link href="/request-a-quotation" className="btn-primary w-full">
                Request a quotation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
