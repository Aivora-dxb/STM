# IMAGE SOURCES & LICENSING RECORD — STM MACHINERY

Every image shipped with this website is recorded here with its source and
licence, per the project requirements. **No competitor logos, no fake customer
logos, no unlicensed stock, and no images that misrepresent STM facilities,
projects, employees or inventory are used.**

The current build ships intentionally **light on imagery** — the design relies
on an abstract navy/steel system (gradients, an engineering-grid pattern and
glass panels) rather than stock photos, so there is nothing to mislicense. When
you add real or stock photography later, record each file in the table below.

---

## Images currently in the project

| Local file | Type | Source | Creator | Licence | Commercial use | Attribution | Date added | Used on |
|---|---|---|---|---|---|---|---|---|
| `public/images/og-default.jpg` | AI/programmatically generated | Generated for this project (PIL/abstract composition) | — (generated) | Original project asset | Yes | None required | 2026-07 | Social share / OG image, all pages |
| `public/icon.svg` | Vector, hand-authored | Created for this project | — | Original project asset | Yes | None required | 2026-07 | Favicon / PWA icon |
| Fonts: `src/fonts/inter-*.woff2` | Font | Inter (fontsource / rsms.me) | Rasmus Andersson | SIL Open Font License 1.1 | Yes | Not required for web embedding | 2026-07 | Body typeface (self-hosted) |
| Fonts: `src/fonts/rajdhani-*.woff2` | Font | Rajdhani (Google Fonts / Indian Type Foundry) | Indian Type Foundry | SIL Open Font License 1.1 | Yes | Not required for web embedding | 2026-07 | Display typeface (self-hosted) |

### AI-generated image notes (required disclosures)

- **`og-default.jpg`** — programmatically generated abstract composition
  (navy background, engineering grid, concentric arcs, brand text). It is an
  **abstract graphic**, not a photo. It **does not represent an actual STM
  facility, project, employee or inventory item.** Intended use: social-media
  share preview and default Open Graph image.

---

## The temporary logo

The header/footer currently use a **temporary text-based logo**
(`src/components/ui/logo.tsx`), clearly identified as temporary in code
comments. Replace it with the official STM MACHINERY logo:

1. Drop the official file at `public/images/stm-logo.svg` (preferred) or
   `stm-logo.png` (transparent).
2. Swap the `<Logo>` component's markup for a Next.js `<Image>` (or inline
   SVG). Do not distort or recolour the official mark without approval.

---

## Guidance for adding photography later

If you add machinery/industrial photos:

- Use only images you own, or licensed royalty-free stock (e.g. Unsplash,
  Pexels — both allow commercial use; or a paid library with a commercial
  licence). Record the exact source URL, licence and date here.
- **No watermarks; no competitor or manufacturer logos in-frame; no images
  implying stock workers are STM employees or stock factories are STM's.**
- Convert to **WebP or AVIF**, provide responsive sizes, add descriptive
  `alt` text, and lazy-load below-the-fold images (use `next/image`, which
  handles format negotiation, sizing and lazy-loading automatically).
- For any AI-generated visual, add a row noting it is AI-generated and that it
  does not depict a real STM facility/project/employee/inventory item, and
  check it contains no unreadable fake control-panel text, fake safety
  markings, fake branding or impossible machinery.
