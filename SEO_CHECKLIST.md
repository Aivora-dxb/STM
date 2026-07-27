# SEO CHECKLIST — STM MACHINERY

## Keyword-to-page map

Built **before** the copy, and reflected in `src/lib/seo.ts`. Each page has a
single search intent, one primary theme, and supporting themes. No two pages
share a title, and there are no doorway or near-duplicate location pages.

| Page | Intent | Primary theme | Supporting themes |
|---|---|---|---|
| `/` Home | Brand + category discovery | industrial machinery supplier Dubai | machinery supplier UAE, industrial equipment supplier UAE, factory solutions |
| `/about` | Trust / who-we-are | machinery supplier Dubai (about) | industrial equipment supplier, Dubai machinery company |
| `/products-and-solutions` | Category hub | industrial machinery & equipment | CNC, power, oil & gas, pumps, spare parts |
| `/products-and-solutions/cnc-and-precision-machinery` | Category | CNC machinery supplier Dubai | CNC turning/milling, machining centres UAE |
| `/products-and-solutions/power-generation-and-distribution` | Category | power equipment supplier Dubai | generators, transformers, switchgear UAE |
| `/products-and-solutions/oil-gas-and-drilling-equipment` | Category | oil and gas equipment supplier UAE | drilling equipment, oilfield spares |
| `/products-and-solutions/pumps-valves-and-engines` | Category | industrial pumps valves engines UAE | process valves, industrial engines |
| `/products-and-solutions/medical-and-surgical-equipment` | Category | medical equipment supplier UAE | hospital / laboratory equipment |
| `/products-and-solutions/agricultural-machinery` | Category | agricultural machinery supplier Dubai | tractors, farm machinery UAE |
| `/products-and-solutions/industrial-plant-equipment` | Category | factory equipment supplier Dubai | production lines, material handling |
| `/products-and-solutions/spare-parts` | Category | industrial spare parts UAE | machinery & engine spare parts |
| `/industries` | Sector discovery | machinery solutions by industry UAE | manufacturing, energy, medical, agriculture |
| `/factory-from-a-z` | High-intent project | factory setup solutions UAE | factory development, turnkey procurement support |
| `/services` | Support / retention | machinery after-sales support UAE | spare parts, maintenance, installation coordination |
| `/request-a-quotation` | Conversion | request machinery quotation UAE | RFQ, equipment enquiry |
| `/contact` | Navigational / local | contact machinery supplier Dubai | phone, WhatsApp, address |

> Use keywords naturally. Do **not** keyword-stuff, hide text, or spin up
> hundreds of thin pages. Category pages exist only where there is genuine
> distinct content.

## Technical SEO — implemented in this build

- [x] Semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`, `article`, `aside`).
- [x] Exactly one `<h1>` per page; logical H2/H3 order.
- [x] Search-friendly, hyphenated URLs.
- [x] Unique `<title>` and meta description per page (`src/lib/seo.ts`).
- [x] Canonical tags on every page (self-referencing).
- [x] Open Graph + Twitter card metadata (`buildMetadata`).
- [x] `robots.txt` (`src/app/robots.ts`) — allows all, disallows `/api/` and `/thank-you`.
- [x] XML sitemap (`src/app/sitemap.ts`) — all public pages + category pages.
- [x] Breadcrumb navigation + BreadcrumbList structured data on inner pages.
- [x] Structured data: Organization, LocalBusiness (with GeoCoordinates),
      WebSite (site-wide); Service (category pages); FAQPage (services).
- [x] `thank-you` set to `noindex` (thin conversion confirmation page).
- [x] Descriptive `alt` text on meaningful images; decorative graphics marked
      `aria-hidden`.
- [x] `metadataBase` set so OG/canonical URLs resolve absolutely.
- [x] PWA manifest with theme colour.
- [x] Structured data contains **no unverified facts** (no fake ratings,
      awards, counts).

## Post-launch tasks (do these on the live domain)

- [ ] Verify domain in **Google Search Console** and **Bing Webmaster Tools**
      (see DEPLOYMENT.md for the verification methods).
- [ ] Submit `https://www.stm-machinery.ae/sitemap.xml` in both.
- [ ] Set the preferred domain (www vs non-www) and ensure one 301-redirects
      to the other at the host/CDN level.
- [ ] Confirm HTTPS everywhere and no mixed content.
- [ ] Test rich results: https://search.google.com/test/rich-results
- [ ] Run Lighthouse on the production URL (targets: Perf ≥90, A11y ≥95,
      Best Practices ≥95, SEO ≥95). See README "Testing".
- [ ] Create/claim the **Google Business Profile** for the Dubai location and
      keep NAP (name, address, phone) identical to the site.
