import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Milestone Agency", short_name: "Milestone", description: "Strategy, creativity and digital growth.", start_url: "/", display: "standalone", background_color: "#101114", theme_color: "#101114", icons: [{ src: "/logo.svg", sizes: "any", type: "image/svg+xml" }] };
}
