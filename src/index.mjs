/**
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/

import prefetch from './prefetch.mjs';
import requestIdleCallback from './request-idle-callback.mjs';

/**
 * Extract links from a provided DOM element that are
 * in the user's viewport.
 * @param {Object} el DOM element to check for in-viewport links
 * @return {Promise} resolving with list of URLs found
 */
function extractInViewportLinks(el) {
  return new Promise((resolve, reject) => {
    const urls = [];
    const links = el.querySelectorAll('a');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Link is in the view
        if (entry.intersectionRatio > 0) {
          urls.push(entry.target.href);
        } else {
          // Link is out of the view
        }
      });
      resolve(urls);
    });
    links.forEach(link => {
      observer.observe(link);
    });
  });
};

/**
 * Prefetch an array of URLs using rel=prefetch
 * if supported. Falls back to XHR otherwise.
 * @param {Array} urls - Array of URLs to prefetch
 * @param {string} priority - "priority" of the request
 */
const prefetchURLs = function (urls, priority) {
  urls.forEach(url => {
    prefetch(url, priority);
  });
};

/**
 * Prefetch an array of URLs if the user's effective
 * connection type and data-saver preferences suggests
 * it would be useful. By default, looks at in-viewport
 * links for `document`. Can also work off a supplied
 * DOM element or static array of URLs.
 * @param {Object} options - Configuration options for quicklink
 * @param {Array} options.urls - Array of URLs to prefetch (override)
 * @param {Object} options.el - DOM element to prefetch in-viewport links of
 * @param {string} options.priority - Attempt to fetch with higher priority (low or high)
 * @param {Number} options.timeout - Timeout after which prefetching will occur
 * @param {function} options.timeoutFn - Custom timeout function
 * @return {Object} Promise
 */
export default function (options) {
  return new Promise((resolve, reject) => {
    options = options || {
      priority: 'low',
      timeout: 2000,
    };
    const timeoutFn = options.timeoutFn || requestIdleCallback;
    timeoutFn(() => {
      // Prefetch an array of URLs if supplied (as an override)
      if (options.urls !== undefined && options.urls.length > 0) {
        prefetchURLs(options.urls, options.priority);
        resolve(options.urls);
      } else {
        // Element to extract in-viewport links for
        const el = options.el || document;
        extractInViewportLinks(el).then(urls => {
          prefetchURLs(urls, options.priority);
          resolve(urls);
        });
      }
    }, {timeout: options.timeout});
  });
}
