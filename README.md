# quicklink
> Faster subsequent page-loads by prefetching in-viewport links during idle time

## How it works

Quicklink attempts to make navigations to subsequent pages load faster. It:

* **Detects links within the viewport** (using `IntersectionObsever`)
* **Waits until the browser is idle** (using `requestIdleCallback`)
* **Checks if the user isn't on a slow connection** (using `navigator.connection.effectiveType`) or has data-saver enabled (using `navigator.connection.saveData`)
* **Prefetches URLs to the links** (using `<link rel=prefetch>` or XHR). Provides some control over the request priority (can switch to `fetch()` if supported).

## Installation

For use with [node](http://nodejs.org) and [npm](https://npmjs.com):

```sh
npm install --save quicklink
```

## Usage

Once initialized, `quicklink` will automatically prefetch URLs for links that are in-viewport during idle time. 

Quickstart:

```html
<!-- Include quicklink from dist -->
<script src="dist/quicklink.js"></script>
<!-- Initialize (you can do this to whenever you want) -->
<script>
quicklink();
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
* Call `quicklink{urls:[...]}` with a custom set of URLs to prefetch

## Recipes

**Set the DOM element to obseve for in-viewport links**

Defaults to `document` otherwise.

```js
let elem = document.getElementById('carousel');
quicklink({
  el: elem
});
```

**Set a custom array of URLs to be prefetched**

If you would prefer to provide a static list of URLs to be prefetched, instead of detecting those in-viewport, customizing URLs is supported.

```js
quicklink({
   urls: ['2.html','4.html']
});
```

**Set the request priority for prefetches**

Defaults to low-priority (`rel=prefetch` or XHR). For high-priority,
attempts to use `fetch()` or falls back to XHR.

```js
quicklink({ priority: 'high' });
```

## License

Licensed under the Apache-2.0 license.

