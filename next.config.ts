/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['atomio.tech'],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig