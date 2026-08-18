import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: ["10.0.0.66", "127.0.0.1", "localhost"],
  async redirects() {
    return [
      {
        source: "/whitepaper",
        destination: "/white-paper",
        permanent: true,
      },
      {
        source: "/Whitepaper",
        destination: "/white-paper",
        permanent: true,
      },
      {
        source: "/white_paper",
        destination: "/white-paper",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
