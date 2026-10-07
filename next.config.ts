import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90, 95],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/team",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
