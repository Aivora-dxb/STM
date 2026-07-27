# STM MACHINERY L.L.C. — Website

A modern, production-oriented website for STM MACHINERY: a Dubai-based supplier
of industrial machinery, equipment, spare parts and factory-development support.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer
Motion**. Premium industrial design with controlled glassmorphism, restrained
animation, self-hosted fonts, structured data, and a working Request-for-
Quotation form with server-side validation and email delivery.

---

## Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Local development](#local-development)
- [Environment variables](#environment-variables)
- [Editing content](#editing-content)
- [Editing contact details](#editing-contact-details)
- [Replacing images & the logo](#replacing-images--the-logo)
- [Activating the RFQ form](#activating-the-rfq-form)
- [Production build](#production-build)
- [Deployment](#deployment) (see also `DEPLOYMENT.md`)
- [Analytics](#analytics)
- [Search-engine verification](#search-engine-verification)
- [Testing](#testing)
- [Multilingual readiness](#multilingual-readiness)
- [Project structure](#project-structure)

---

## Prerequisites

- **Node.js 18.18+** (Node 20 or 22 recommended)
- **npm** (ships with Node)

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
# open http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # run the production server (after build)
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in values. **`.env.local` is
git-ignored — never commit real credentials.**

| Variable | Required | Purpose |
|---|---|---|
| `SMTP_HOST` | for RFQ email | SMTP server host |
| `SMTP_PORT` | for RFQ email | 587 (STARTTLS) or 465 (TLS) |
| `SMTP_USER` | for RFQ email | SMTP login |
| `SMTP_PASS` | for RFQ email | SMTP password |
| `RFQ_TO` | optional | Recipient (defaults to `info@stm-machinery.ae`) |
| `RFQ_FROM` | optional | From address (defaults to `SMTP_USER`) |
| `NEXT_PUBLIC_GA_ID` | optional | Google Analytics 4 ID (`G-…`) |
| `NEXT_PUBLIC_GTM_ID` | optional | Google Tag Manager ID (`GTM-…`) |

Until SMTP is set, the RFQ form returns a clear "service not configured"
message rather than pretending to send — by design.

## Editing content

Almost all copy lives in typed data files, so you can edit text without
touching page layout:

- **Products & categories** — `src/content/catalog.ts` (`productCategories`).
  Each category has a name, tagline, intro, item list, applications and
  relevant industries. Add a category by adding an object; its detail page and
  sitemap entry are generated automatically.
- **Industries** — `src/content/catalog.ts` (`industries`).
- **Factory From A–Z stages** — `src/content/catalog.ts` (`factoryStages`).
- **Services & "why STM"** — `src/content/catalog.ts` (`services`, `whyStm`).
- **Navigation & partner brands** — `src/content/nav.ts`.
- **Page titles / meta descriptions** — `src/lib/seo.ts` (`pageSeo`).
- **Longer prose** (About, Factory intro, legal pages) lives in the respective
  files under `src/app/**/page.tsx`.

## Editing contact details

**All contact details are in one file: `src/lib/company.ts`.** Change the
phone, email, address, WhatsApp number or canonical URL there and it updates
the header, footer, contact page, forms, structured data, metadata and the
WhatsApp/tel/mailto/map links everywhere. Do not hard-code contact details
anywhere else.

## Replacing images & the logo

- **Logo:** a temporary text logo is used (`src/components/ui/logo.tsx`, clearly
  marked temporary). Add the official file at `public/images/stm-logo.svg` and
  swap the component's markup for a `next/image` or inline SVG.
- **Photos:** add machinery imagery under `public/images/`, use `next/image`
  for automatic WebP/AVIF + responsive sizing + lazy loading, and record every
  file in `IMAGE_SOURCES.md`. See that file for licensing rules.
- **OG image:** replace `public/images/og-default.jpg` (1200×630).

## Activating the RFQ form

1. Set the `SMTP_*` variables (and optionally `RFQ_TO` / `RFQ_FROM`).
2. Rebuild / redeploy.
3. Submit a test enquiry; confirm it arrives at `info@stm-machinery.ae`.

The endpoint (`src/app/api/rfq/route.ts`) performs server-side validation,
honeypot + in-memory rate limiting, file-type/size checks, output
sanitization, and sends via nodemailer. On success it returns `{ ok: true }`
and the client redirects to `/thank-you`. **It never fakes success.**

> **Note on rate limiting:** the built-in limiter is per-instance (in-memory).
> On a single server or Vercel Hobby this is fine. For multi-instance
> deployments, back it with a shared store (e.g. Upstash Redis) — see
> `DEPLOYMENT.md`.

## Production build

```bash
npm run build && npm start
```

The build is clean (0 TypeScript errors, 0 lint errors). Fonts are
**self-hosted** (`src/fonts/*.woff2`), so the build needs no network access and
makes no third-party font request at runtime.

## Deployment

Two supported paths, detailed in **`DEPLOYMENT.md`**:

- **Option A (recommended): Vercel** — full Next.js support, the RFQ API route
  and dynamic rendering work out of the box.
- **Option B: conventional hosting (e.g. cPanel/Tasjeel)** — either run Node
  (`npm start` behind a reverse proxy) or use a static export with the RFQ form
  posting to a separately hosted endpoint. Trade-offs are documented.

## Analytics

Set `NEXT_PUBLIC_GA_ID` and/or `NEXT_PUBLIC_GTM_ID`. Conversion-relevant
elements already carry `data-analytics` attributes you can bind events to:

- `data-analytics="whatsapp-click"` — WhatsApp button/links
- `data-analytics="tel-click"` — phone links
- `data-analytics="email-click"` — email links
- the RFQ form dispatches a `rfq-submitted` window event on success

See `DEPLOYMENT.md` → Analytics for wiring these to GA4/GTM events, and
`SEO_CHECKLIST.md` for the events to track.

## Search-engine verification

Add the verification token from Google Search Console / Bing Webmaster Tools
via the `verification` field in `src/app/layout.tsx` metadata, or by dropping
the HTML verification file into `public/`. Then submit the sitemap. Full steps
in `DEPLOYMENT.md`.

## Testing

Automated checks run in this repo (`npm run build`, `npm run typecheck` — both
pass). The following require a browser/live URL and should be run before
go-live:

- **Lighthouse** (Chrome DevTools → Lighthouse) on the production URL. Targets:
  Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- **Rich Results Test** — https://search.google.com/test/rich-results
- **Cross-browser** — Chrome, Safari, Edge.
- **Responsive** — 360 / 390 / 768 / 1024 / 1440 px widths.
- **Keyboard & reduced-motion** — tab through nav/forms; enable
  "reduce motion" and confirm animations are disabled.

## Multilingual readiness

The first release is English only (no Arabic published, per brief). The
architecture is prepared for Arabic/RTL later: content is centralised in
`src/content` and `src/lib`, no text is baked into interface images, layouts
use logical spacing, and routing can adopt a `[locale]` segment. Add `dir="rtl"`
handling and Arabic strings when ready.

## Project structure

```
src/
  app/                     # App Router pages + api/rfq route + sitemap/robots/manifest
    products-and-solutions/[slug]/   # dynamic category pages
  components/
    layout/                # header, footer, whatsapp fab
    sections/              # hero, rfq-form, partner-strip, legal-page
    ui/                    # reveal, logo, primitives (cards/breadcrumb/cta/jsonld)
  content/                 # catalog.ts (products/industries/etc), nav.ts
  fonts/                   # self-hosted woff2
  lib/                     # company.ts, seo.ts, utils.ts, rfq-schema.ts
public/                    # images, icon
```

---

© STM MACHINERY L.L.C. — Dubai, United Arab Emirates.
