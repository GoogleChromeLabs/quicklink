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

import prefetchLinks from './prefetch.mjs';
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
}

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
 */
export default function (options) {
  options = options || { priority: 'low' };
  requestIdleCallback(() => {
    if ('connection' in navigator) {
      // Don't prefetch if the user is on 2G..
      if (navigator.connection.effectiveType && /\slow-2g|2g/.test(navigator.connection.effectiveType)) {
        return;
      }
      // Don't prefetch if Save-Data is enabled..
      if (navigator.connection.saveData) {
        return;
      }
    }
    // Prefetch an array of URLs if supplied (as an override)
    if (options.urls !== undefined && options.urls.length > 0) {
      prefetchLinks(options.urls, options.priority);
    } else {
      // Element to extract in-viewport links for
      const el = options.el || document;
      extractInViewportLinks(el).then(urls => {
        prefetchLinks(urls, options.priority);
      });
    }
  });
}
