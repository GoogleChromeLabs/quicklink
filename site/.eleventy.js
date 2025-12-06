/* eslint-env node */

/* eslint-disable new-cap */

'use strict';

const {existsSync} = require('node:fs');
const path = require('node:path');
const {EleventyHtmlBasePlugin: htmlBasePlugin} = require('@11ty/eleventy');
const navigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const autoprefixer = require('autoprefixer');
const htmlminifier = require('html-minifier-terser');
const markdownIt = require('markdown-it');
const pluginRev = require('eleventy-plugin-rev');
const postcss = require('postcss');
const sass = require('eleventy-sass');
const {version: quicklinkVersion} = require(path.join(__dirname, '../package.json'));

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const QUICKLINK_UMD_SRC = path.join(__dirname, '../dist/quicklink.umd.js');
const QUICKLINK_UMD_DEST = path.posix.join(`assets/vendor/quicklink-${quicklinkVersion}.umd.js`);

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
  eleventyConfig.addPlugin(pluginRev);
  eleventyConfig.addPlugin(sass, [
    {
      postcss: postcss([autoprefixer]),
      sass: {
        style: 'expanded',
        sourceMap: true,
      },
      rev: false,
    },
    {
      sass: {
        style: 'compressed',
        sourceMap: false,
      },
      rev: true,
      when: [{NODE_ENV: 'production'}],
    },
  ]);

  if (!existsSync(QUICKLINK_UMD_SRC)) {
    throw new Error(`Missing local Quicklink bundle at ${QUICKLINK_UMD_SRC}. Run "npm run build-all" from the repo root first.`);
  }

  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  // Serve the locally built Quicklink bundle
  eleventyConfig.addPassthroughCopy({[QUICKLINK_UMD_SRC]: QUICKLINK_UMD_DEST});

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
