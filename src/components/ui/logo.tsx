import Image from "next/image";
import { cn } from "@/lib/utils";
import stmLogo from "../../../public/images/stm-logo.png";

/**
 * Official STM MACHINERY logo (navy wordmark + steel gear), transparent PNG.
 * Shown larger and without a plate. A soft drop-shadow keeps the dark navy
 * wordmark legible against the dark header. Swap the file at
 * public/images/stm-logo.png to update everywhere.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={stmLogo}
        alt="STM MACHINERY"
        priority
        className="h-11 w-auto drop-shadow-[0_1px_6px_rgba(255,255,255,0.25)] sm:h-12"
        sizes="(max-width: 640px) 170px, 210px"
      />
    </span>
  );
}
