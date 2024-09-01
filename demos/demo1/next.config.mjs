/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@simple-component/overflow-text'],
  }
};

export default nextConfig;
