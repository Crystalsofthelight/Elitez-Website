import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: ["10.0.0.66", "127.0.0.1", "localhost"],
  async headers() {
    return [
      {
        source: "/og-card.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, immutable",
          },
        ],
      },
      {
        source: "/og.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/white_paper",
        destination: "/whitepaper",
        permanent: true,
      },
      {
        source: "/elite-whitepaper",
        destination: "/whitepaper",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
