// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co', 'images.prismic.io']
  },
  pwa: {
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    disable: true,
    buildExcludes: [/middleware-manifest\.json$/]
  }
});
