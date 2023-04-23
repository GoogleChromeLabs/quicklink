/* eslint-env node */

/* eslint-disable new-cap */

'use strict';

const {EleventyHtmlBasePlugin: htmlBasePlugin} = require('@11ty/eleventy');
const navigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlminifier = require('html-minifier-terser');
const markdownIt = require('markdown-it');

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
  eleventyConfig.addPlugin(htmlBasePlugin, {baseHref: '/'});
  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy('src/assets');
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
