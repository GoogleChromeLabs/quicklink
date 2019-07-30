/**
 * Portions copyright 2018 Google Inc.
 * Inspired by Gatsby's prefetching logic, with those portions
 * remaining MIT. Additions include support for Fetch API,
 * XHR switching, SaveData and Effective Connection Type checking.
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
const preFetched = {};

/**
 * Checks if a feature on `link` is natively supported.
 * Examples of features include `prefetch` and `preload`.
 * @param {string} feature - name of the feature to test
 * @return {Boolean} whether the feature is supported
 */
function support(feature) {
  const link = document.createElement('link');
  return link.relList && link.relList.supports && link.relList.supports(feature);
}

/**
 * Fetches a given URL using `<link rel=prefetch>`
 * @param {string} url - the URL to fetch
 * @return {Object} a Promise
 */
function linkPrefetchStrategy(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement(`link`);
    link.rel = `prefetch`;
    link.href = url;

    link.onload = resolve;
    link.onerror = reject;

    document.head.appendChild(link);
  });
};

/**
 * Fetches a given URL using XMLHttpRequest
 * @param {string} url - the URL to fetch
 * @return {Object} a Promise
 */
function xhrPrefetchStrategy(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.open(`GET`, url, req.withCredentials=true);

    req.onload = () => {
      (req.status === 200) ? resolve() : reject();
    };

    req.send();
  });
}

/**
 * Fetches a given URL using the Fetch API. Falls back
 * to XMLHttpRequest if the API is not supported.
 * @param {string} url - the URL to fetch
 * @return {Object} a Promise
 */
function highPriFetchStrategy(url) {
  // TODO: Investigate using preload for high-priority
  // fetches. May have to sniff file-extension to provide
  // valid 'as' values. In the future, we may be able to
  // use Priority Hints here.
  //
  // As of 2018, fetch() is high-priority in Chrome
  // and medium-priority in Safari.
  return self.fetch == null
    ? xhrPrefetchStrategy(url)
    : fetch(url, {credentials: `include`});
}

const supportedPrefetchStrategy = support('prefetch')
  ? linkPrefetchStrategy
  : xhrPrefetchStrategy;

/**
 * Prefetch a given URL with an optional preferred fetch priority
 * @param {String} url - the URL to fetch
 * @param {Boolean} isPriority - if is "high" priority
 * @param {Object} conn - navigator.connection (internal)
 * @return {Object} a Promise
 */
function prefetcher(url, isPriority, conn) {
  if (preFetched[url]) {
    return;
  }

  if (conn = navigator.connection) {
    // Don't prefetch if the user is on 2G or if Save-Data is enabled.
    if ((conn.effectiveType || '').includes('2g') || conn.saveData) return;
  }

  // Wanna do something on catch()?
  return (isPriority ? highPriFetchStrategy : supportedPrefetchStrategy)(url).then(() => {
    preFetched[url] = true;
  });
};

export default prefetcher;
