import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // Set this to the maximum size you need (e.g., 10MB)
    },
  },
};

export default nextConfig;
