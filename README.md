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

For use with [node](http://nodejs.org) and [npm](https://npmjs.com):

```sh
npm install --save quicklink
```

You can also grab `quicklink` from [unpkg.com/quicklink](https://unpkg.com/quicklink).

## Usage

Once initialized, `quicklink` will automatically prefetch URLs for links that are in-viewport during idle time. 

Quickstart:

```html
<!-- Include quicklink from dist -->
<script src="dist/quicklink.js"></script>
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
import quicklink from "dist/quicklink.mjs";
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

TODO:
* Explore detecting file-extension of resources and using [rel=preload](https://w3c.github.io/preload/) for high priority fetches
* Explore using [Priority Hints](https://github.com/WICG/priority-hints) for importance hinting

## Polyfills

`quicklink`:

* Includes a very small fallback for [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
* Requires `IntersectionObserver` to be supported (see [CanIUse](https://caniuse.com/#feat=intersectionobserver)). We recommend conditionally polyfillng this feature with a service like Polyfill.io:

```html
<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
```

Alternatively, see the [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill).

## Recipes

**Set a custom timeout for prefetching resources**

Defaults to 2 seconds (via `requestIdleCallback`). Here we override it to 4 seconds:

```js
quicklink({
  timeout: 4000
});
```

**Set the DOM element to obseve for in-viewport links**

Defaults to `document` otherwise.

```js
const elem = document.getElementById('carousel');
quicklink({
  el: elem
});
```

**Set a custom array of URLs to be prefetched**

If you would prefer to provide a static list of URLs to be prefetched, instead of detecting those in-viewport, customizing URLs is supported.

```js
quicklink({
   urls: ['2.html','3.html', '4.js']
});
```

**Set the request priority for prefetches**

Defaults to low-priority (`rel=prefetch` or XHR). For high-priority (`priority: true`), attempts to use `fetch()` or falls back to XHR.

```js
quicklink({ priority: true });
```

## Browser support

The prefetching provided by `quicklink` can be viewed as a [progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/). Cross-browser support is as follows:

* Without polyfills: Chrome, Firefox, Edge, Opera, Android Browser, Samsung Internet.
* With [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) ~6KB gzipped/minified: Safari, IE9+

Certain features have layered support. If opting for `{priority: true}` and `fetch()` isn't available, XHR will be used instead.

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

## Related projects

* Using [Gatsby](https://gatsbyjs.org)? You already get most of this for free baked in. It uses `Intersection Observer` to prefetch all of the links that are in view and provided heavy inspiration for this project. 
* Want a more data-driven approach? See [Guess.js](https://guess-js.github.io). It uses analytics and machine-learning to prefetch resources based on how users navigate your site. It also has plugins for [Webpack](https://www.npmjs.com/package/guess-webpack) and [Gatsby](https://www.gatsbyjs.org/docs/optimize-prefetching-with-guessjs/).

## License

Licensed under the Apache-2.0 license.

