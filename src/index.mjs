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
import throttle from 'throttles';
import { priority, supported } from './prefetch.mjs';
import requestIdleCallback from './request-idle-callback.mjs';

// Cache of URLs we've prefetched
// Its `size` is compared against `opts.limit` value.
const toPrefetch = new Set();

/**
 * Determine if the anchor tag should be prefetched.
 * A filter can be a RegExp, Function, or Array of both.
 *   - Function receives `node.href, node` arguments
 *   - RegExp receives `node.href` only (the full URL)
 * @param  {Element}  node    The anchor (<a>) tag.
 * @param  {Mixed}    filter  The custom filter(s)
 * @return {Boolean}          If true, then it should be ignored
 */
function isIgnored(node, filter) {
  return Array.isArray(filter)
    ? filter.some(x => isIgnored(node, x))
    : (filter.test || filter).call(filter, node.href, node);
}

/**
 * Prefetch an array of URLs if the user's effective
 * connection type and data-saver preferences suggests
 * it would be useful. By default, looks at in-viewport
 * links for `document`. Can also work off a supplied
 * DOM element or static array of URLs.
 * @param {Object} options - Configuration options for quicklink
 * @param {Object} [options.el] - DOM element to prefetch in-viewport links of
 * @param {Boolean} [options.priority] - Attempt higher priority fetch (low or high)
 * @param {Array} [options.origins] - Allowed origins to prefetch (empty allows all)
 * @param {Array|RegExp|Function} [options.ignores] - Custom filter(s) that run after origin checks
 * @param {Number} [options.timeout] - Timeout after which prefetching will occur
 * @param {Number} [options.throttle] - The concurrency limit for prefetching
 * @param {Number} [options.limit] - The total number of prefetches to allow
 * @param {Function} [options.timeoutFn] - Custom timeout function
 * @param {Function} [options.onError] - Error handler for failed `prefetch` requests
 */
export function listen(options) {
  if (!options) options = {};
  if (!window.IntersectionObserver) return;

  const [toAdd, isDone] = throttle(options.throttle || 1/0);
  const limit = options.limit || 1/0;

  const allowed = options.origins || [location.hostname];
  const ignores = options.ignores || [];

  const timeoutFn = options.timeoutFn || requestIdleCallback;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry = entry.target);
        // Do not prefetch if will match/exceed limit
        if (toPrefetch.size < limit) {
          toAdd(() => {
            prefetch(entry.href, options.priority).then(isDone).catch(err => {
              isDone(); if (options.onError) options.onError(err);
            });
          });
        }
      }
    });
  });

  timeoutFn(() => {
    // Find all links & Connect them to IO if allowed
    (options.el || document).querySelectorAll('a').forEach(link => {
      // If the anchor matches a permitted origin
      // ~> A `[]` or `true` means everything is allowed
      if (!allowed.length || allowed.includes(link.hostname)) {
        // If there are any filters, the link must not match any of them
        isIgnored(link, ignores) || observer.observe(link);
      }
    });
  }, {
    timeout: options.timeout || 2000
  });

  return function () {
    // wipe url list
    toPrefetch.clear();
    // detach IO entries
    observer.disconnect();
  };
}


/**
* Prefetch a given URL with an optional preferred fetch priority
* @param {String} url - the URL to fetch
* @param {Boolean} [isPriority] - if is "high" priority
* @param {Object} [conn] - navigator.connection (internal)
* @return {Object} a Promise
*/
export function prefetch(url, isPriority, conn) {
  if (conn = navigator.connection) {
    // Don't prefetch if using 2G or if Save-Data is enabled.
    if (conn.saveData || /2g/.test(conn.effectiveType)) return;
  }

  // Dev must supply own catch()
  return Promise.all(
    [].concat(url).map(str => {
      if (!toPrefetch.has(str)) {
        // Add it now, regardless of its success
        // ~> so that we don't repeat broken links
        toPrefetch.add(str);

        return (isPriority ? priority : supported)(
          new URL(str, location.href).toString()
        );
      }
    })
  );
}
