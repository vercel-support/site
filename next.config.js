const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withSvgr = require("next-svgr");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [require("@mapbox/rehype-prism")]
  }
});
module.exports = withPlugins([withMDX, withSvgr, optimizedImages], {
  handleImages: ["jpeg", "png", "webp", "gif"],
  pageExtensions: ["js", "jsx", "mdx"]
});
