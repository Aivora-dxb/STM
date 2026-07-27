# DEPLOYMENT — STM MACHINERY

Two deployment options are documented. **Option A (Vercel) is recommended.**

---

## Recommendation at a glance

| | Option A — Vercel (recommended) | Option B — Conventional host (cPanel/Tasjeel) |
|---|---|---|
| RFQ API route | Works natively | Needs Node runtime **or** an external form endpoint |
| Dynamic rendering (`?category=`) | Works natively | Needs Node; static export loses it |
| Setup effort | Lowest | Higher |
| SSL | Automatic | Usually via host (Let's Encrypt/AutoSSL) |
| Cost | Free tier available | Existing hosting |

**Why Vercel is recommended:** this is a Next.js app with a server API route
(the RFQ handler) and one dynamically-rendered page. Vercel runs both without
extra plumbing, gives automatic HTTPS, a global CDN and preview deployments.
The site is already used on Tasjeel cPanel for other properties — Option B
explains how to make it work there too, with its trade-offs.

---

## Option A — Vercel (recommended)

### Requirements
- A Vercel account and this project in a Git repo (GitHub/GitLab/Bitbucket),
  or the Vercel CLI.

### Steps
1. Push the project to a Git repository.
2. In Vercel: **New Project → Import** the repo. Framework auto-detects as
   Next.js. Build command `next build`, output handled automatically.
3. **Environment variables** — add these in Project → Settings → Environment
   Variables (Production + Preview):
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
   - `RFQ_TO` (optional), `RFQ_FROM` (optional)
   - `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GTM_ID` (optional)
4. **Deploy.**
5. **Domain:** Project → Settings → Domains → add `www.stm-machinery.ae` (and
   `stm-machinery.ae` redirecting to it). At your DNS provider, point the
   records as Vercel instructs (usually a CNAME for `www` and an A/ALIAS for
   the apex). SSL is issued automatically.

### Build / deploy commands
- Build: `next build` (default)
- Install: `npm install`
- No special output directory needed.

### Rate limiting note
The in-memory limiter resets per serverless invocation. For stronger
protection add a shared store (e.g. Upstash Redis) or enable Vercel's WAF /
rate-limiting. Optional and documented; the honeypot still applies.

---

## Option B — Conventional hosting (cPanel / Tasjeel)

There are two sub-paths. Choose **B1** if the host can run Node; **B2** if you
need a static export.

### B1 — Node on cPanel (keeps the RFQ API working)
1. In cPanel, use **Setup Node.js App** (Passenger). Create an app:
   - Application root: upload the project (or `git clone`).
   - Application startup file: `node_modules/next/dist/bin/next` with
     args `start`, **or** add a small `server.js` that calls `next start`.
   - Node version: 18.18+ (20/22 preferred).
2. Run `npm install` then `npm run build` (via the cPanel Node app's
   "Run NPM Install" / terminal).
3. Set the environment variables (`SMTP_*`, etc.) in the Node app's
   Environment Variables panel.
4. Start the app; map the domain to it. Ensure AutoSSL/Let's Encrypt is on.
   - The RFQ API route and dynamic page work because Node is running.

### B2 — Static export (no Node at runtime)
Use this only if the host cannot run Node.
1. Add `output: "export"` to `next.config.mjs` **and** remove/replace the
   dynamic pieces:
   - The **RFQ API route** cannot run on a static host. Point the form at an
     external endpoint instead (see below).
   - Make `/request-a-quotation` static (drop the `searchParams` prefill or
     read the category from `window.location` on the client).
2. Build: `next build` → static files output to `out/`.
3. Upload the contents of `out/` to `public_html` on cPanel.
4. **Form processing** — pick one:
   - A form service (Formspree, Web3Forms, Basin) — change the form's `fetch`
     target to their endpoint; file uploads supported per their plans.
   - A small PHP mail handler on the same cPanel (e.g. `contact.php` using
     `mail()` or PHPMailer/SMTP) — post the `FormData` there. This matches the
     existing Tasjeel setup used for other STM properties.
   - A serverless function elsewhere (e.g. a single Vercel/Netlify function)
     that the static site posts to.
5. Ensure SSL (AutoSSL) and a `www` ↔ apex redirect in `.htaccess`.

**Limitation of B2:** you lose the built-in Node validation/rate-limiting and
must replicate validation + spam protection in the chosen endpoint. Keep the
client-side validation (already present) and add server checks in the handler.

---

## Domain setup (both options)
- Decide canonical host: **`https://www.stm-machinery.ae`** (matches
  `src/lib/company.ts`).
- 301-redirect the non-canonical variant (apex ↔ www) at the host/CDN.
- Force HTTPS.

## SSL
- Vercel: automatic.
- cPanel: enable AutoSSL / Let's Encrypt for the domain and `www` subdomain.

## Email / form-service requirements
- SMTP credentials for `info@stm-machinery.ae` (host, port, user, pass). Test
  deliverability; set SPF/DKIM on the domain to avoid enquiries landing in
  spam.
- File uploads: the Node RFQ route accepts PDF/DOC/DOCX/XLS/XLSX/JPG/PNG/DWG/
  DXF/ZIP, ≤10 MB each, ≤25 MB total, ≤5 files. If using a form service in B2,
  confirm it supports attachments of this size.

## Security headers
`next.config.mjs` sets X-Content-Type-Options, X-Frame-Options, Referrer-
Policy, Permissions-Policy and a Content-Security-Policy. On Vercel these apply
automatically. On cPanel static hosting, replicate them in `.htaccess`
(`Header set …`) since `next.config` headers don't apply to a static export.
Review the CSP if you add third-party scripts (analytics domains must be
allow-listed in `script-src`/`connect-src`).

## Analytics wiring
1. Set `NEXT_PUBLIC_GA_ID` (GA4) and/or `NEXT_PUBLIC_GTM_ID`.
2. Add the GA4/GTM snippet in `src/app/layout.tsx` (guard on the env var so it
   only loads when set), or inject via GTM.
3. Bind events to the existing hooks:
   - clicks on `[data-analytics="whatsapp-click"]`, `"tel-click"`,
     `"email-click"`
   - the `rfq-submitted` window event → an RFQ conversion event
   - primary CTA clicks and file uploads (add a `data-analytics` attr as
     needed)
4. Add analytics domains to the CSP `script-src`/`connect-src`.
5. Exclude internal traffic via a GA4 internal-traffic filter (your office IP).

## Search-engine setup
- **Google Search Console:** add the property, verify (DNS TXT, HTML file in
  `public/`, or the `verification.google` metadata field in `layout.tsx`), then
  submit `https://www.stm-machinery.ae/sitemap.xml`.
- **Bing Webmaster Tools:** add & verify the site (you can import from GSC),
  submit the same sitemap.

## Post-deploy checklist
- [ ] All pages load over HTTPS, no mixed content.
- [ ] RFQ test enquiry received at `info@stm-machinery.ae`.
- [ ] WhatsApp / tel / mailto / map links work on a real phone.
- [ ] Sitemap and robots reachable and correct.
- [ ] Lighthouse run on the live URL meets targets.
- [ ] Rich Results test passes for Organization/LocalBusiness/Breadcrumb/FAQ.
