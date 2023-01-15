/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  images: {
    domains: ['salient.tailwindui.com', 'cdn.pixabay.com']
  }
};

module.exports = nextConfig;
