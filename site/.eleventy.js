/* eslint-disable new-cap */

'use strict';

const fs = require('node:fs/promises');
const {EleventyHtmlBasePlugin: htmlBasePlugin} = require('@11ty/eleventy');
const navigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const autoprefixer = require('autoprefixer');
const htmlminifier = require('html-minifier-terser');
const markdownIt = require('markdown-it');
const postcss = require('postcss');
const sass = require('sass');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const STYLES_DIR = 'src/assets/styles';
const SCRIPTS_DIR = 'src/assets/js';

const compileStyles = async entry => {
  const from = `${STYLES_DIR}/${entry}.scss`;
  const result = sass.compile(from, {
    style: IS_PRODUCTION ? 'compressed' : 'expanded',
    sourceMap: !IS_PRODUCTION,
    sourceMapIncludeSources: !IS_PRODUCTION,
  });

  // inline the map: bundled output has no stable path to point a .map file at
  const processed = await postcss([autoprefixer]).process(result.css, {
    from,
    map: IS_PRODUCTION ? false : {inline: true, prev: result.sourceMap},
  });

  return processed.css;
};

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

  // output filenames are content-hashed
  eleventyConfig.addBundle('css', {
    toFileDirectory: 'assets/styles',
    outputFileExtension: 'css',
  });
  eleventyConfig.addBundle('js', {
    toFileDirectory: 'assets/js',
    outputFileExtension: 'js',
  });

  eleventyConfig.addGlobalData('styles', async () => ({
    main: await compileStyles('main'),
    markdown: await compileStyles('github-markdown'),
  }));

  eleventyConfig.addGlobalData('scripts', async () => ({
    main: await fs.readFile(`${SCRIPTS_DIR}/script.js`, 'utf8'),
  }));

  eleventyConfig.addWatchTarget(STYLES_DIR);
  eleventyConfig.addWatchTarget(SCRIPTS_DIR);

  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/demos');

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
