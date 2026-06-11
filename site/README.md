# eleventy-quicklink-website

Our canonical site source for Quicklink. This project uses [Eleventy](https://www.11ty.io/) as a static site generator.
Templating uses [Nunjucks](https://mozilla.github.io/nunjucks/).

## Installation

```sh
git clone git@github.com:GoogleChromeLabs/quicklink.git
npm install
```

## Commands

Run these from the **repo root** to also watch and rebuild the library source:

| Command              | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `npm run dev`        | Build once, then watch `src/` and serve the site              |
| `npm run site:build` | Build templates, data, CSS, and JS for production environment |
| `npm run site:lint`  | Lint the site code                                            |
| `npm run site:test`  | Build and test the site                                       |

Run these from the **`site/` directory** for site-only tasks (does not watch `../src/`).
They use the prebuilt library in `../dist`, so run `npm run build-all` from the repo root first if you haven't:

| Command          | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `npm run start`  | Start a development server and watch for site changes         |
| `npm run build`  | Build templates, data, CSS, and JS for production environment |
| `npm run lint`   | Lint the site code                                            |
| `npm run test`   | Build and test the site                                       |
