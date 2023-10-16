/* eslint-disable @typescript-eslint/no-var-requires */
// This file sets a custom webpack configuration to use your Next.js app

const withPWA = require("next-pwa");
const { withSentryConfig } = require("@sentry/nextjs");
const million = require("million/compiler");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
module.exports = million.next(
  withBundleAnalyzer(
    withPWA({
      reactStrictMode: true,
      images: {
        domains: ["i.scdn.co", "images.prismic.io", "images.unsplash.com"],
      },
      pwa: {
        dest: "public",
        disable: process.env.NODE_ENV === "development",
        buildExcludes: [/middleware-manifest\.json$/],
      },
      auto: true,
    })
  )
);

// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: true }
);
