import Image from "next/image";
import { cn } from "@/lib/utils";
import stmLogo from "../../../public/images/stm-logo.png";

/**
 * Official STM MACHINERY logo (navy wordmark + steel gear), transparent PNG.
 * The header and footer now use a light background, so the dark logo sits
 * directly on it with no plate. Swap the file at public/images/stm-logo.png
 * to update everywhere.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={stmLogo}
        alt="STM MACHINERY"
        priority
        className="h-11 w-auto sm:h-12"
        sizes="(max-width: 640px) 170px, 210px"
      />
    </span>
  );
}
