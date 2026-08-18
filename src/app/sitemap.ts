import type { MetadataRoute } from "next";

const routes = [
  "",
  "/dream-crafter",
  "/music",
  "/token",
  "/elite",
  "/eltz",
  "/swap",
  "/whitepaper",
  "/community",
  "/faq",
  "/legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.elitez.xyz${route}`,
    lastModified: new Date(),
  }));
}
