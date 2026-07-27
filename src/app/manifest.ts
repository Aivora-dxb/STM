import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.legalName,
    short_name: company.shortName,
    description: "Industrial machinery, equipment and factory solutions supplier in Dubai, UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1626",
    theme_color: "#0F1F36",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
