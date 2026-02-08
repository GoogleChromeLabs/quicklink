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
 */

import throttle from 'throttles';
import {viaFetch, supported} from './prefetch.mjs';
import requestIdleCallback from './request-idle-callback.mjs';

/**
 * @typedef {(RegExp|((href: string, node: Element) => boolean))} FilterMatcher
 */
/**
 * @typedef {(target: Element|string,
 *    prefetchHandler: (urls: string|Array<string>) => Promise<unknown>) => void} PrefetchChunksHandler
 */

// Cache of URLs we've prefetched
// Its `size` is compared against `opts.limit` value.
const toPrefetch = new Set();

/**
 * Determine if the anchor tag should be prefetched.
 * A filter can be a RegExp, Function, or Array of both.
 *   - Function receives `node.href, node` arguments
 *   - RegExp receives `node.href` only (the full URL)
 * @param  {Element}  node    The anchor (<a>) tag.
 * @param  {FilterMatcher|Array<FilterMatcher>} filter  The custom filter(s)
 * @returns {boolean}         If true, then it should be ignored
 */
function isIgnored(node, filter) {
  if (Array.isArray(filter)) {
    return filter.some(x => isIgnored(node, x));
  }

  return (filter.test || filter).call(filter, node.href, node);
}

/**
 * Prefetch an array of URLs if the user's effective
 * connection type and data-saver preferences suggests
 * it would be useful. By default, looks at in-viewport
 * links for `document`. Can also work off a supplied
 * DOM element or static array of URLs.
 * @param {object} options - Configuration options for quicklink
 * @param {object} [options.el] - DOM element to prefetch in-viewport links of
 * @param {boolean} [options.priority] - Attempt higher priority fetch (low or high)
 * @param {Array} [options.origins] - Allowed origins to prefetch (empty allows all)
 * @param {Array<FilterMatcher>|FilterMatcher} [options.ignores] - Custom filter(s) that run after origin checks
 * @param {number} [options.timeout] - Timeout after which prefetching will occur
 * @param {number} [options.throttle] - The concurrency limit for prefetching
 * @param {number} [options.limit] - The total number of prefetches to allow
 * @param {(cb: () => void, opts?: object) => number} [options.timeoutFn] - Custom timeout function
 * @param {(error: Error) => void} [options.onError] - Error handler for failed `prefetch` requests
 * @param {PrefetchChunksHandler} [options.prefetchChunks]
 *    Function to prefetch chunks for route URLs (with route manifest for URL mapping)
 * @returns {undefined}
 */
export function listen(options = {}) {
  if (!window.IntersectionObserver) return;

  const [toAdd, isDone] = throttle(options.throttle || Number.Infinity);
  const limit = options.limit || Number.Infinity;

  const allowed = options.origins || [location.hostname];
  const ignores = options.ignores || [];

  const timeoutFn = options.timeoutFn || requestIdleCallback;

  const {prefetchChunks} = options;

  const prefetchHandler = urls => {
    prefetch(urls, options.priority)
        .then(isDone)
        .catch(error => {
          isDone();
          if (options.onError) options.onError(error);
        });
  };

  const observer = new IntersectionObserver(entries => {
    for (const {isIntersecting, target} of entries) {
      if (!isIntersecting) continue;

      observer.unobserve(target);
      // Do not prefetch if will match/exceed limit
      if (toPrefetch.size < limit) {
        toAdd(() => {
          prefetchChunks ?
            prefetchChunks(target, prefetchHandler) :
            prefetchHandler(target.href);
        });
      }
    }
  });

  timeoutFn(() => {
    // Find all links & Connect them to IO if allowed
    const links = (options.el || document).querySelectorAll('a[href]');
    for (const link of links) {
      // If the anchor matches a permitted origin
      // ~> A `[]` or `true` means everything is allowed
      if (!allowed.length || allowed.includes(link.hostname)) {
        // If there are any filters, the link must not match any of them
        if (!isIgnored(link, ignores)) observer.observe(link);
      }
    }
  }, {
    timeout: options.timeout || 2000,
  });

  return () => {
    // wipe url list
    toPrefetch.clear();
    // detach IO entries
    observer.disconnect();
  };
}

/**
 * Prefetch a given URL with an optional preferred fetch priority
 * @param {string} url - the URL to fetch
 * @param {boolean} [isPriority] - if is "high" priority
 * @returns {object} a Promise
 */
export function prefetch(url, isPriority) {
  const {connection} = navigator;
  if (!connection) return Promise.resolve();

  // Don't prefetch if using 2G or if Save-Data is enabled.
  if (connection.saveData) {
    return Promise.reject(new Error('Cannot prefetch, Save-Data is enabled'));
  }

  if (/2g/.test(connection.effectiveType)) {
    return Promise.reject(new Error('Cannot prefetch, network conditions are poor'));
  }

  // Dev must supply own catch()
  return Promise.all([url].flat().map(str => {
    if (toPrefetch.has(str)) return [];

    // Add it now, regardless of its success
    // ~> so that we don't repeat broken links
    toPrefetch.add(str);

    return (isPriority ? viaFetch : supported)(new URL(str, location.href).toString());
  }));
}
