<p align="center">
  <img src="https://i.imgur.com/NVRZLHv.png" width="640" alt="quicklink">
  <br>
  <a href="https://www.npmjs.org/package/quicklink"><img src="https://img.shields.io/npm/v/quicklink.svg?style=flat" alt="npm"></a>
  <a href="https://unpkg.com/quicklink"><img src="https://img.badgesize.io/https://unpkg.com/quicklink/dist/quicklink.js?compression=gzip" alt="gzip size"></a>
  <a href="https://www.npmjs.com/package/quicklink"><img src="https://img.shields.io/npm/dt/quicklink.svg" alt="downloads" ></a>
  <a href="https://travis-ci.org/GoogleChromeLabs/quicklink"><img src="https://travis-ci.org/GoogleChromeLabs/quicklink.svg?branch=master" alt="travis"></a>
</p>

# quicklink
> Faster subsequent page-loads by prefetching in-viewport links during idle time

## How it works

Quicklink attempts to make navigations to subsequent pages load faster. It:

* **Detects links within the viewport** (using [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API))
* **Waits until the browser is idle** (using [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback))
* **Checks if the user isn't on a slow connection** (using `navigator.connection.effectiveType`) or has data-saver enabled (using `navigator.connection.saveData`)
* **Prefetches URLs to the links** (using [`<link rel=prefetch>`](https://www.w3.org/TR/resource-hints/#prefetch) or XHR). Provides some control over the request priority (can switch to `fetch()` if supported).

## Why

This project aims to be a drop-in solution for sites to prefetch links based on what is in the user's viewport. It also aims to be small (**< 1KB minified/gzipped**).

## Installation

For use with [node](https://nodejs.org) and [npm](https://npmjs.com):

```sh
npm install --save quicklink
```

You can also grab `quicklink` from [unpkg.com/quicklink](https://unpkg.com/quicklink).

## Usage

Once initialized, `quicklink` will automatically prefetch URLs for links that are in-viewport during idle time.

Quickstart:

```html
<!-- Include quicklink from dist -->
<script src="dist/quicklink.umd.js"></script>
<!-- Initialize (you can do this whenever you want) -->
<script>
quicklink();
</script>
```

For example, you can initialize after the `load` event fires:

```html
<script>
window.addEventListener('load', () =>{
   quicklink();
});
</script>
```

ES Module import:

```js
import quicklink from "quicklink/dist/quicklink.mjs";
quicklink();
```

The above options are best for multi-page sites. Single-page apps have a few options available for using quicklink with a router:

* Call `quicklink()` once a navigation to a new route has completed
* Call `quicklink()` against a specific DOM element / component
* Call `quicklink({urls:[...]})` with a custom set of URLs to prefetch

## API

`quicklink` accepts an optional options object with the following parameters:

* `el`: DOM element to observe for in-viewport links to prefetch
* `urls`: Static array of URLs to prefetch (instead of observing `document` or a DOM element links in the viewport)
* `timeout`: Integer for the `requestIdleCallback` timeout. A time in milliseconds by which the browser must execute prefetching. Defaults to 2 seconds.
* `timeoutFn`: Function for specifying a timeout. Defaults to `requestIdleCallback`. Can also be swapped out for a custom function like [networkIdleCallback](https://github.com/pastelsky/network-idle-callback) (see demos)
* `priority`: Boolean specifying preferred priority for fetches. Defaults to `false`. `true` will attempt to use the `fetch()` API where supported (rather than rel=prefetch)
* `origins`: Static array of URL hostname strings that are allowed to be prefetched. Defaults to the same domain origin, which prevents _any_ cross-origin requests.
* `ignores`: A RegExp, Function, or Array that further determines if a URL should be prefetched. These execute _after_ origin matching.

TODO:
* Explore detecting file-extension of resources and using [rel=preload](https://w3c.github.io/preload/) for high priority fetches
* Explore using [Priority Hints](https://github.com/WICG/priority-hints) for importance hinting

## Polyfills

`quicklink`:

* Includes a very small fallback for [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
* Requires `IntersectionObserver` to be supported (see [CanIUse](https://caniuse.com/#feat=intersectionobserver)). We recommend conditionally polyfilling this feature with a service like Polyfill.io:

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>
```

Alternatively, see the [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill).

## Recipes

### Set a custom timeout for prefetching resources

Defaults to 2 seconds (via `requestIdleCallback`). Here we override it to 4 seconds:

```js
quicklink({
  timeout: 4000
});
```

### Set the DOM element to observe for in-viewport links

Defaults to `document` otherwise.

```js
const elem = document.getElementById('carousel');
quicklink({
  el: elem
});
```

### Set a custom array of URLs to be prefetched

If you would prefer to provide a static list of URLs to be prefetched, instead of detecting those in-viewport, customizing URLs is supported.

```js
quicklink({
   urls: ['2.html','3.html', '4.js']
});
```

### Set the request priority for prefetches

Defaults to low-priority (`rel=prefetch` or XHR). For high-priority (`priority: true`), attempts to use `fetch()` or falls back to XHR.

```js
quicklink({ priority: true });
```

### Specify a custom list of allowed origins

Provide a list of hostnames that should be prefetch-able. Only the same origin is allowed by default.

> **Important:** You must also include your own hostname!

```js
quicklink({
  origins: [
    // add mine
    'my-website.com',
    'api.my-website.com',
    // add third-parties
    'other-website.com',
    'example.com',
    // ...
  ]
});
```

### Allow all origins

Enables all cross-origin requests to be made.

> **Note:** You may run into [CORB](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md) and [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues!

```js
quicklink({
  origins: true,
  // or
  origins: []
});
```

### Custom Ignore Patterns

These filters run _after_ the `origins` matching has run. Ignores can be useful for avoiding large file downloads or for responding to DOM attributes dynamically.

```js
// Same-origin restraint is enabled by default.
//
// This example will ignore all requests to:
//  - all "/api/*" pathnames
//  - all ".zip" extensions
//  - all <a> tags with "noprefetch" attribute
//
quicklink({
  ignores: [
    /\/api\/?/,
    uri => uri.includes('.zip'),
    (uri, elem) => elem.hasAttribute('noprefetch')
  ]
});
```

You may also wish to ignore prefetches to URLs which contain a URL fragment (e.g. `index.html#top`). This can be useful if you (1) are using anchors to headings in a page or (2) have URL fragments setup for a single-page application, and which to avoid firing prefetches for similar URLs.

Using `ignores` this can be achieved as follows:

```js
quicklink({
    ignores: [
        uri => uri.includes('#')
        // or RegExp: /#(.+)/
        // or element matching: (uri, elem) => !!elem.hash
    ]
});
```

## Browser support

The prefetching provided by `quicklink` can be viewed as a [progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/). Cross-browser support is as follows:

* Without polyfills: Chrome, Safari ≥ 12.1, Firefox, Edge, Opera, Android Browser, Samsung Internet.
* With [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) ~6KB gzipped/minified: Safari ≤ 12.0, IE11
* With the above and a [Set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) polyfill: IE9 and IE10. [Core.js](https://github.com/zloirock/core-js) provides both `Set()` and `Array.from()` shims. Projects like [es6-shim](https://github.com/paulmillr/es6-shim/blob/master/README.md) are an alternative you can consider.

Certain features have layered support:

* The [Network Information API](https://wicg.github.io/netinfo/), which is used to check if the user has a slow effective connection type (via `navigator.connection.effectiveType`) is only available in [Chrome 61+ and Opera 57+](https://caniuse.com/#feat=netinfo)
* If opting for `{priority: true}` and the [Fetch API](https://fetch.spec.whatwg.org/) isn't available, XHR will be used instead.

## Using the prefetcher directly

`quicklink` includes a prefetcher that can be individually imported for use in other projects. After installing `quicklink` as a dependency, you can use it as follows:

```html
<script type="module">
import prefetch from '../src/prefetch.mjs';

const urls = ['1.html', '2.html'];
const promises = urls.map(url => prefetch(url));
Promise.all(promises);
</script>
```

## Demo

### Glitch demos

* [Using Quicklink in a multi-page site](https://github.com/GoogleChromeLabs/quicklink/tree/master/demos/news)
* [Using Quicklink with Service Workers (via Workbox)](https://github.com/GoogleChromeLabs/quicklink/tree/master/demos/news-workbox)

### Research

Here's a [WebPageTest run](https://www.webpagetest.org/video/view.php?id=181212_4c294265117680f2636676721cc886613fe2eede&data=1) for our [demo](https://keyword-2-ecd7b.firebaseapp.com/) improving page-load performance by up to 4 seconds via quicklink's prefetching. A [video](https://youtu.be/rQ75YEbJicw) comparison of the before/after prefetching is on YouTube.

For demo purposes, we deployed a version of the [Google Blog](https://blog.google) on
Firebase hosting. We then deployed another version of it, adding quicklink to the homepage and benchmarked navigating from the homepage to an article that was
automatically prefetched. The prefetched version loaded faster.

Please note: this is by no means an exhaustive benchmark of the pros and cons of in-viewport link prefetching. Just a demo of the potential improvements the approach can offer. Your own mileage may heavily vary.

## Additional notes

### Session Stitching

Cross-origin prefetching (e.g a.com/foo.html prefetches b.com/bar.html) has a number of limitations. One such limitation is with session-stitching. b.com may expect a.com's navigation requests to include session information (e.g a temporary ID - e.g b.com/bar.html?hash=<>&timestamp=<>), where this information is used to customize the experience or log information to analytics.  If session-stitching requires a timestamp in the URL, what is prefetched and stored in the HTTP cache may not be the same as the one the user ultimately navigates to. This introduces a challenge as it can result in double prefetches. 

To workaround this problem, you can consider passing along session information via the [ping attribute](https://caniuse.com/#feat=ping) (separately) so the origin can stitch a session together asynchronously.

## Related projects

* Using [Gatsby](https://gatsbyjs.org)? You already get most of this for free baked in. It uses `Intersection Observer` to prefetch all of the links that are in view and provided heavy inspiration for this project.
* Want a more data-driven approach? See [Guess.js](https://guess-js.github.io). It uses analytics and machine-learning to prefetch resources based on how users navigate your site. It also has plugins for [Webpack](https://www.npmjs.com/package/guess-webpack) and [Gatsby](https://www.gatsbyjs.org/docs/optimizing-site-performance-with-guessjs/).
* WordPress users can now get quicklink as a [WordPress Plugin from the plugin repository](https://wordpress.org/plugins/quicklink/).
* Drupal users can install the [Quicklink Drupal module](https://www.drupal.org/project/quicklink).
* Want less aggressive prefetching? [instant.page](https://instant.page/) prefetches on mouseover and touchstart, right before a click.

## License

Licensed under the Apache-2.0 license.
