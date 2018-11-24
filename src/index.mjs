import prefetch from './prefetch.mjs';
import requestIdleCallback from './request-idle-callback.mjs';

/**
 * Prefetch an array of URLs using rel=prefetch
 * if supported. Falls back to XHR otherwise.
 * @param {Array} urls Array of URLs to prefetch
 */
function fetchLinks(urls) {
  urls.forEach(url => {
    prefetch(url);
  });
}

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
 * @param {Object} options supported options
 * options.urls: Array of URLs to prefetch (override)
 * options.el: DOM element to prefetch in-viewport links of
 */
export default function (options) {
  options = options || {};
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
      fetchLinks(options.urls);
    } else {
      // Element to extract in-viewport links for
      const el = options.el || document;
      extractInViewportLinks(el).then(urls => {
        fetchLinks(urls);
      });
    }
  });
}
