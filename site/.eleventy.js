const markdownIt = require('markdown-it');
const htmlminifier = require('html-minifier-terser');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormants: ["md", "js", "html"]
  });
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  eleventyConfig.addNunjucksFilter("markdown", function(string) {
    const md = new markdownIt();

    return md.render(string);
  });

  eleventyConfig.addPairedShortcode("markdownConvert", function(content) {
    const md = new markdownIt();
    return md.render(content);
  });

  eleventyConfig.addTransform("htmlminifier", async function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
        return htmlminifier.minify(content, {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            conservativeCollapse: false,
            decodeEntities: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: false,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: false,
            removeOptionalAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeTagWhitespace: false,
            sortAttributes: true,
            sortClassName: true
        })
    };

    return content;
  });

  eleventyConfig.addNunjucksShortcode("sectionTitle", function(title) {
    const md = new markdownIt();
    return md.render(`## ${title}`);
  });

  return {
    dir: {
      input: "src",
      output: "build"
    }
  };
};
