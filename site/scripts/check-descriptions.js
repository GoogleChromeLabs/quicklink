'use strict';

const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');

const expectedDescriptions = {
  'api/index.html':
    'Explore the Quicklink API, including options for prefetching and prerendering links.',
  'approach/index.html':
    'Learn how Quicklink detects links, waits for idle time, and avoids prefetching on slow connections.',
  'demo/index.html':
    'Try Quicklink demos that compare navigation performance across multi-page and single-page apps.',
  'measure/index.html':
    'Measure Quicklink navigation performance with Chrome DevTools, WebPageTest, and real-user monitoring.',
};

for (const [page, expectedDescription] of Object.entries(expectedDescriptions)) {
  const html = readFileSync(`build/${page}`, 'utf8');
  const descriptionMatch = html.match(
      /<meta(?=[^>]*name=description)(?=[^>]*content="([^"]*)")[^>]*>/,
  );
  const description = descriptionMatch && descriptionMatch[1];

  assert.equal(
      description,
      expectedDescription,
      `${page} should have a page-specific meta description`,
  );
}
