const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [require("@mapbox/rehype-prism")]
  }
});
module.exports = withPlugins([withMDX, withSvgr], {
  pageExtensions: ["js", "jsx", "mdx"]
});
