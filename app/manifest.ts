import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — NYC Window Cleaning`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0c4a6e",
  };
}
