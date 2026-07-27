import { cn } from "@/lib/utils";

/**
 * TEMPORARY text-based logo.
 * Replace with the official STM MACHINERY SVG/transparent-PNG when available
 * (drop it at /public/images/stm-logo.svg and swap this component for an
 * <Image>). Clearly marked temporary per the brief — see IMAGE_SOURCES.md.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2 select-none", className)}>
      <span className="flex items-center">
        <span className="grid h-8 w-8 place-items-center rounded-sm bg-accent font-display text-sm font-bold text-white">
          S
        </span>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        STM<span className="text-accent-400"> MACHINERY</span>
      </span>
    </span>
  );
}
