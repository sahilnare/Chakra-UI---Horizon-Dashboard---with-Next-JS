/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin/default',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;
