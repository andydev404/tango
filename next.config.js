/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  images: {
    domains: ['salient.tailwindui.com']
  }
};

module.exports = nextConfig;
