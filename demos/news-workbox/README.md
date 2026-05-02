# Demo: Quicklink with Workbox

The original Glitch project that combined Quicklink with Workbox-based service
workers is no longer available.

For an end-to-end Quicklink demo you can run today, see the self-hosted
mini-ecomm and SPA demos:

- https://getquick.link/demos/mini-ecomm-quicklink/
- https://getquick.link/demos/spa/

For Workbox itself, the up-to-date guides live at
https://developer.chrome.com/docs/workbox. To layer Workbox runtime caching on
top of Quicklink, register a service worker that caches navigations or static
assets — Quicklink only triggers `<link rel="prefetch">`, so any caching
strategy your service worker applies will continue to work as expected.
