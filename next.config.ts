import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a lockfile in the parent dir otherwise makes
  // Turbopack infer the wrong root and fail to resolve the Next package.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
