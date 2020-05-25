const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");
const withMdxEnhanced = require("next-mdx-enhanced");
const readingTime = require("reading-time");

const withMdx = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [require("@mapbox/rehype-prism")],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      return {
        timeToRead: readingTime(mdxContent).text
      };
    }
  }
});

module.exports = withPlugins([withMdx, withSvgr], {
  // pageExtensions: ["js", "jsx", "mdx"]
});
