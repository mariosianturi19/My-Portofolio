/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portofolio-Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portofolio-Website/' : '',
};

module.exports = nextConfig;