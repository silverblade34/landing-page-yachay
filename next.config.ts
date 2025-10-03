import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Solo ignora durante el build en producción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Solo ignora durante el build en producción  
    ignoreBuildErrors: true,
  },
};

export default nextConfig;