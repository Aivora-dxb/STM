import Image from "next/image";
import { partners } from "@/content/nav";
import { Reveal } from "@/components/ui/reveal";

/**
 * Partner / supplier brand strip.
 * Displayed per confirmed reseller status. Where an official logo file is on
 * hand it is shown on a light tile; the rest fall back to the brand name as
 * text until their logos are supplied (see IMAGE_SOURCES.md).
 */
export function PartnerStrip() {
  return (
    <section className="container-x py-14" aria-label="Brands we source and supply">
      <Reveal>
        <p className="eyebrow mb-6 text-center">Brands we source &amp; supply</p>
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {partners.map((p) => (
            <li key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-32 items-center justify-center rounded-lg bg-white/90 px-4 transition-all duration-300 hover:bg-white"
                aria-label={`${p.name} (opens in a new tab)`}
              >
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={110}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="font-display text-lg font-bold tracking-tight text-navy">
                    {p.name}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
