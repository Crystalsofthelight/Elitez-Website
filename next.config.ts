import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: ["10.0.0.66", "127.0.0.1", "localhost"],
};

export default nextConfig;
