import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
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
      {
        source: "/try-demo",
        destination: "/demos",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/capabilities",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/capabilities/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
