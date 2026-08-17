import type { MetadataRoute } from "next";

const routes = [
  "",
  "/dream-crafter",
  "/music",
  "/token",
  "/elite",
  "/eltz",
  "/white-paper",
  "/community",
  "/legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://elitez.xyz${route}`,
    lastModified: new Date(),
  }));
}
