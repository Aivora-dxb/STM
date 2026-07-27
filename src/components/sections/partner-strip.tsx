import { partners } from "@/content/nav";
import { Reveal } from "@/components/ui/reveal";

/**
 * Partner / supplier brand strip.
 * Displayed per confirmed reseller status. Brand names are shown as text on
 * light tiles until official, licensed logo assets are supplied — swap the
 * <span> for an <Image> once logos are on file (see IMAGE_SOURCES.md).
 * Original brand colours belong on light tiles since the site is dark.
 */
export function PartnerStrip() {
  return (
    <section className="container-x py-14" aria-label="Brands we source and supply">
      <Reveal>
        <p className="eyebrow mb-6 text-center">Brands we source & supply</p>
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {partners.map((p) => (
            <li key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-32 items-center justify-center rounded-lg bg-white/90 px-4 grayscale transition-all duration-300 hover:grayscale-0 hover:bg-white"
                aria-label={`${p.name} (opens in a new tab)`}
              >
                <span className="font-display text-lg font-bold tracking-tight text-navy">
                  {p.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
