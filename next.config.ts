import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/abundancia-masterclass",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/abundancia-masterclass",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
