/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['wellnessforce.com', 'storage.googleapis.com'],
  },
  experimental: { images: { layoutRaw: true } },


}

module.exports = nextConfig
