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

---

## Update — hero & category images (added post-launch)

| Local file | Type | Source | Licence status | Used on |
|---|---|---|---|---|
| `public/images/hero-cnc.jpg` | Photograph (CNC 5-axis machining) | **Supplied by client** | **License to be confirmed** — appears to be professional stock. STM to confirm it owns or has a commercial licence for this image before public launch. Does not depict an actual STM facility unless STM confirms otherwise. | Home hero background |
| `public/images/cat-cnc-and-precision-machinery.jpg` | Photograph | Same as hero-cnc.jpg | Same as above | CNC category card |
| `public/images/cat-*.jpg` (power, oil-gas, pumps, medical, agricultural, plant, spare-parts) | Generated gradient tiles | Created for this project (PIL) — abstract navy/steel gradients with a gear motif | Original project assets, no licence needed | Product-category cards — **placeholders** until STM supplies fitting licensed photos (drop a real photo in with the same filename to replace) |

> **Action for STM:** (1) confirm the CNC hero photo is licensed/owned; (2) supply fitting, licensed photographs for the other seven categories to replace the gradient placeholders. Same filenames = automatic swap.

---

## Update 2 — all category photos supplied by client

All seven remaining category placeholders were replaced with photographs
**supplied by the client**. Each was navy-tinted for palette consistency and
produced in two sizes: a 4:3 card image (`cat-<slug>.jpg`) and a wide banner
(`cat-<slug>-wide.jpg`) used as the background of that category's detail page.

| Category | Card file | Page banner file | Source | Licence status |
|---|---|---|---|---|
| CNC & Precision Machinery | `cat-cnc-and-precision-machinery.jpg` | `...-wide.jpg` | Client-supplied | **Confirm licence/ownership** |
| Power Generation & Distribution | `cat-power-generation-and-distribution.jpg` | `...-wide.jpg` | Client-supplied | **Confirm licence/ownership** |
| Oil, Gas & Drilling | `cat-oil-gas-and-drilling-equipment.jpg` | `...-wide.jpg` | Client-supplied | **Confirm licence/ownership** |
| Pumps, Valves & Engines | `cat-pumps-valves-and-engines.jpg` | `...-wide.jpg` | Client-supplied | **Confirm licence/ownership** |
| Medical & Surgical | `cat-medical-and-surgical-equipment.jpg` | `...-wide.jpg` | Client-supplied | **Confirm licence/ownership** |
| Agricultural Machinery | `cat-agricultural-machinery.jpg` | `...-wide.jpg` | Client-supplied | **Confirm licence/ownership** |
| Industrial Plant Equipment | `cat-industrial-plant-equipment.jpg` | `...-wide.jpg` | Client-supplied | **Confirm licence/ownership** |

> These images appear to be AI-generated or stock. STM should confirm it owns
> or has a commercial licence for each before public launch, and note that they
> are illustrative — they do not depict actual STM facilities, projects or
> inventory. The agricultural image shows a green tractor resembling a
> recognisable brand livery; if brand association is a concern, replace it.

---

## Update 3 — spare-parts photo, industry icons, Guschky logo

- **`cat-spare-parts.jpg` / `-wide.jpg`** — client-supplied photo of machined
  engine components/bearings on a workbench. Navy-tinted for consistency.
  Confirm licence/ownership; illustrative, not actual STM stock.
- **`public/images/industries/*.png`** (8 files: aerospace, automotive,
  agriculture-food, construction-materials, energy-power-generation,
  engineering-contracting, government-infrastructure, industrial-plants) —
  client-supplied blue line icons, recoloured to the site accent blue and made
  transparent. The remaining 4 sectors (Oil & Gas, Medical & Healthcare,
  Manufacturing & Fabrication, Trading Companies) use matching line icons from
  the lucide-react library (MIT licence, already a project dependency) for a
  consistent set.
- **`public/images/partner-guschky.svg`** — official Guschky logo supplied by
  client. Shown on the partners strip per confirmed reseller status. Remaining
  partner brands (EXAKT, Vibra, DRATEC, Zenith, QGM) still shown as text until
  their official logos are supplied.

---

## Update 4 — all industry icons + all partner logos supplied

- **`public/images/industries/*.png`** — all 12 sector icons now use
  client-supplied blue line/detailed icons (aerospace, automotive, oil-and-gas,
  energy-power-generation, medical-healthcare, agriculture-food,
  manufacturing-fabrication, engineering-contracting, construction-materials,
  industrial-plants, trading-companies, government-infrastructure). Recoloured
  to the site accent blue and made transparent. The earlier lucide-react
  fallbacks are no longer used.
- **Partner logos** — all six now use official supplied assets:
  `partner-exakt.png`, `partner-vibra.png`, `partner-dratec.png`,
  `partner-guschky.svg`, `partner-zenith.png`, `partner-qgm.png`. Displayed on
  the partners strip per confirmed reseller status. Near-white backgrounds were
  made transparent and logos trimmed to sit cleanly on the white tiles.
  Retain reseller/dealer evidence on file.
