import Image from "next/image";
import { cn } from "@/lib/utils";
import stmLogo from "../../../public/images/stm-logo.png";

/**
 * Official STM MACHINERY logo (navy wordmark + steel gear), transparent PNG.
 * Placed on a subtle light frosted plate so the dark navy wordmark reads
 * cleanly against the dark header/footer. Swap the source file at
 * public/images/stm-logo.png to update everywhere.
 */
export function Logo({ className, plate = true }: { className?: string; plate?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        plate && "rounded-md bg-white/90 px-2.5 py-1.5 shadow-sm",
        className,
      )}
    >
      <Image
        src={stmLogo}
        alt="STM MACHINERY"
        priority
        className="h-7 w-auto sm:h-8"
        sizes="(max-width: 640px) 120px, 150px"
      />
    </span>
  );
}
