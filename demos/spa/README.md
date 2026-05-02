# Demo: Quicklink with a single-page app

The original create-react-app Glitch project for this demo is no longer
available. A self-hosted, framework-free SPA replacement lives on the Quicklink
site:

- **Live:** https://getquick.link/demos/spa/
- **Source:** [`site/src/demos/spa`](../../site/src/demos/spa)

The replacement uses a small hand-rolled hash router with one ES-module chunk
per route. Quicklink is configured with an `hrefFn` that maps each link to its
chunk URL, so prefetching grabs the route's JavaScript instead of an HTML
document. The same pattern works in any SPA — see the
[Single-page apps section](https://github.com/GoogleChromeLabs/quicklink#single-page-apps-react)
of the main README for the React variant.
