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
  // Tambahkan base path jika menggunakan custom repository name
  basePath: process.env.NODE_ENV === 'production' ? '/My-Portofolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My-Portofolio/' : '',
};

module.exports = nextConfig;