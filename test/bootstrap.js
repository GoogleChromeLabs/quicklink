const assert = require('assert').strict;
const puppeteer = require('puppeteer');

const {browser: globalBrowser} = global;
const globalAssert = assert;

// puppeteer options
const opts = {
  headless: true,
  slowMo: 100,
  timeout: 20000,
};

// expose variables
before(async () => {
  global.assert = assert;
  global.browser = await puppeteer.launch(opts);
});

// close browser and reset global variables
after(() => {
  global.browser.close();

  global.browser = globalBrowser;
  global.assert = globalAssert;
});
