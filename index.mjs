/**
 * 
 * @param urls Array of URLs to prefetch
 */
function fetchLinks(urls) {
    urls.forEach((url) => {
        prefetch(url);
    });
}

/**
 * Extract only links that are in the visible viewport
 * @param el DOM element to check for in-viewport links
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
 * 
 * @param options 
 * options.urls: Array of URLs to prefetch (override)
 * options.el: DOM element to prefetch in-viewport links of
 */
export default function quicklink(options) {
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
            let el = options.el || document;
            extractInViewportLinks(el).then((urls) => {
                fetchLinks(urls);
            });
        }
    });
}

// TODO: add preload / high prio?