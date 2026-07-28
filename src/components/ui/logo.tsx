import Image from "next/image";
import { cn } from "@/lib/utils";
import stmLogo from "../../../public/images/stm-logo.png";

/**
 * Official STM MACHINERY logo (navy wordmark + steel gear), transparent PNG.
 * The header and footer use a light blue-grey background, so the dark logo sits
 * directly on it with no plate. The source file is trimmed of excess transparent
 * padding and stored at ~2× display resolution for crisp rendering.
 *
 * Sizing is controlled by the caller via `className` (height); width is derived
 * with `w-auto` + object-contain so proportions are always preserved. Intrinsic
 * width/height are passed to next/image to reserve space and avoid layout shift.
 * Swap the file at public/images/stm-logo.png to update everywhere.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={stmLogo}
      alt="STM MACHINERY"
      priority
      width={507}
      height={246}
      className={cn("h-auto object-contain", className)}
      sizes="(max-width: 640px) 140px, 155px"
    />
  );
}
