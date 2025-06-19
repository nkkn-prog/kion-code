import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client'],
  transpilePackages: ['@mantine/core', '@mantine/hooks', '@mantine/form', '@mantine/dates', '@mantine/notifications'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
