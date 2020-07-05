const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");
//const withImages = require("next-optimized-images");

const withMdx = require("@next/mdx")({
  rehypePlugins: [require("@mapbox/rehype-prism")]
});

module.exports = withPlugins([withMdx, withSvgr], {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"]
});
