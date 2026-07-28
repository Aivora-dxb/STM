import { Reveal } from "@/components/ui/reveal";
import type { FactoryStage } from "@/content/catalog";

/**
 * Factory From A–Z stage card.
 * Full-bleed industrial photo background (each already carries a neon step icon)
 * with a dark navy overlay so the number, title and description stay readable.
 * Matches the premium dark card layout in the approved design.
 */
export function FactoryStageCard({ stage, delay = 0 }: { stage: FactoryStage; delay?: number }) {
  return (
    <Reveal delay={delay} as="article">
      <div className="group relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-white/10">
        {/* Photo background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(/images/factory/${stage.image}.jpg)` }}
        />
        {/* Overlays: darken left + bottom for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"
        />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-end p-6">
          <span
            className="font-display text-3xl font-bold text-accent-400"
            aria-hidden="true"
          >
            {stage.step}
          </span>
          <h3 className="mt-1 font-display text-lg font-semibold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
            {stage.name}
          </h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
            {stage.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
