const {expect} = require('chai');
const puppeteer = require('puppeteer');
const {browser: globalBrowser, expect: globalExpect} = global;

// puppeteer options
const opts = {
  headless: true,
  slowMo: 100,
  timeout: 20000,
};

// expose variables
before(async function () {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

// close browser and reset global variables
after(function () {
  global.browser.close();

  global.browser = globalBrowser;
  global.expect = globalExpect;
});
