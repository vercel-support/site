const withPWA = require("next-pwa")({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
});
const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");
const withMdx = require("@next/mdx")({
  rehypePlugins: [require("@mapbox/rehype-prism")],
  remarkPlugins: [require("remark-external-links")],
});

module.exports = withPlugins([withPWA, withMdx, withSvgr], {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "bs.js"],
  async headers() {
    return [
      {
        source: "/api/blurhash",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/posts/(.*)",
        destination: "/writing/$1",
        permanent: true,
      },
      {
        source: "/here",
        destination: "/",
        permanent: true,
      },
    ];
  },
});
