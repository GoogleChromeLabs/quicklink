/* eslint-disable new-cap */

'use strict';

const markdownIt = require('markdown-it');
const htmlminifier = require('html-minifier-terser');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const htmlminifierConfig = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: false,
  decodeEntities: false,
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
  sortClassName: true,
};

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/script.js');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');

  eleventyConfig.addNunjucksFilter('markdown', string => {
    const md = new markdownIt();
    return md.render(string);
  });

  eleventyConfig.addPairedShortcode('markdownConvert', content => {
    const md = new markdownIt();
    return md.render(content);
  });

  eleventyConfig.addNunjucksShortcode('sectionTitle', title => {
    const md = new markdownIt();
    return md.render(`## ${title}`);
  });

  eleventyConfig.addTransform('htmlminifier', (content, outputPath) => {
    if (!outputPath.endsWith('.html')) return content;
    if (!IS_PRODUCTION) return content;

    return htmlminifier.minify(content, htmlminifierConfig);
  });

  return {
    dir: {
      input: 'src',
      output: 'build',
    },
  };
};
