const withPWA = require("next-pwa")({
  pwa: {
    dest: "public"
  }
});
const withPlugins = require("next-compose-plugins");
const withImages = require("next-optimized-images");
const withMdx = require("@next/mdx")({
  rehypePlugins: [require("@mapbox/rehype-prism")]
});

module.exports = withPlugins([withPWA, withMdx, withImages], {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  async redirects() {
    return [
      {
        source: "/posts/(.*)",
        destination: "/writing/$1",
        permanent: true
      },
      {
        source: "/here",
        destination: "/",
        permanent: true
      }
    ];
  }
});
