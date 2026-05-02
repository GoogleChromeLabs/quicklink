import {listen} from 'https://cdn.jsdelivr.net/npm/quicklink@3/dist/quicklink.mjs';

const view = document.getElementById('view');
const nav = document.getElementById('nav');

const routes = {
  '#/': 'routes/home.js',
  '#/blog': 'routes/blog.js',
  '#/about': 'routes/about.js',
  '#/contact': 'routes/contact.js',
};

function currentHash() {
  const h = location.hash || '#/';
  return h in routes ? h : '#/';
}

async function render() {
  const hash = currentHash();
  const chunk = routes[hash];
  const mod = await import(new URL(chunk, document.baseURI).href);
  await mod.default(view);
  for (const a of nav.querySelectorAll('a')) {
    a.classList.toggle('active', a.getAttribute('href') === hash);
  }
  window.scrollTo({top: 0});
}

window.addEventListener('hashchange', render);

listen({
  el: nav,
  hrefFn(el) {
    const chunk = el.dataset.chunk;
    return chunk ? new URL(chunk, document.baseURI).href : el.href;
  },
});

render();
