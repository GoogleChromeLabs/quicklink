/* eslint-env node */

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const siteJson = path.join(__dirname, 'site.json');
const {url} = JSON.parse(fs.readFileSync(siteJson, 'utf8'));

module.exports = () => {
  return {
    // If we are on Netlify, use the `DEPLOY_PRIME_URL` environment variable,
    // otherwise use the `url` from site.json
    url: process.env.NETLIFY === 'true' ? process.env.DEPLOY_PRIME_URL : url,
    isNetlify: process.env.NETLIFY === 'true',
  };
};
