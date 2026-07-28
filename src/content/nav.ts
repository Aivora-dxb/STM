export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products & Solutions", href: "/products-and-solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Factory From A–Z", href: "/factory-from-a-z" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Disclaimer", href: "/disclaimer" },
];

/**
 * Partner / supplier brands STM resells or sources from.
 * Displayed per confirmed reseller status (see CONTENT_REVIEW.md).
 * Logo files are placeholders until official brand assets are supplied —
 * see IMAGE_SOURCES.md. Names shown as text where no licensed logo is on file.
 */
export type Partner = { name: string; url: string; logo?: string };

export const partners: Partner[] = [
  { name: "EXAKT", url: "https://www.exakt.de/" },
  { name: "Vibra", url: "https://www.vibra.co.jp/" },
  { name: "DRATEC", url: "https://dratec.de/" },
  { name: "Guschky", url: "https://www.guschky.com/", logo: "/images/partner-guschky.svg" },
  { name: "Zenith", url: "https://www.zenith.de/" },
  { name: "QGM", url: "https://www.qgmmould.com/" },
];
