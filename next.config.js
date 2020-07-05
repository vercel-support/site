const withPlugins = require("next-compose-plugins");
const withImages = require("next-optimized-images");
const withOffline = require("next-offline")({
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? "service-worker.js"
      : "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/service-worker.js",
        destination: "/_next/static/service-worker.js"
      }
    ];
  }
});

const withMdx = require("@next/mdx")({
  rehypePlugins: [require("@mapbox/rehype-prism")]
});

module.exports = withPlugins([withOffline, withMdx, withImages], {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"]
});
