import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "topitop.vtexassets.com",
      },
    ],
  },
};

export default nextConfig;
