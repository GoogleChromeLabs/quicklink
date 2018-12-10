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

const toPrefetch = new Set();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  	if (entry.isIntersecting) {
      const url = entry.target.href;
      if (toPrefetch.has(url)) {
      	toPrefetch.delete(url);
      	prefetch(url, observer.priority);
      }
  	}
  });
});

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
 */
export default function (options) {
  options = Object.assign({
    priority: 'low',
    timeout: 2e3,
    timeoutFn: requestIdleCallback,
    el: document,
  }, options);

  options.timeoutFn(() => {
    // If URLs are given, prefetch them.
    if (options.urls) {
      options.urls.forEach(url => prefetch(url, options.priority));
      return;
    }

    observer.priority = options.priority;

    // If not, find all links and use IntersectionObserver.
    Array.from(options.el.querySelectorAll('a'), link => {
    	observer.observe(link);
	    toPrefetch.add(link.href);
    });
  }, {timeout: options.timeout});
}
