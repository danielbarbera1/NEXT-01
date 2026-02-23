/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config;
  },
  experimental: {
    turboMode: false, // Deshabilitar Turbopack temporalmente
  },
};

export default nextConfig;
