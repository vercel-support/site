const withPlugins = require("next-compose-plugins");
const withImages = require("next-optimized-images");

const withMdx = require("@next/mdx")({
  rehypePlugins: [require("@mapbox/rehype-prism")]
});

module.exports = withPlugins([withMdx, withImages], {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"]
});
