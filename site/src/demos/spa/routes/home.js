export default function render(view) {
  view.innerHTML = `
    <span class="tag">Home</span>
    <h1>Welcome to the Quicklink SPA demo</h1>
    <p class="lede">This is a tiny client-side router with one JavaScript chunk per route. Quicklink prefetches the chunks for in-viewport navigation links during idle time, so when you click one, the route loads instantly from cache.</p>
    <article>
      <h2>How to try it</h2>
      <p>Open DevTools → Network. Throttle to <em>Fast 3G</em> and reload. You'll see <code>quicklink</code> prefetch <code>routes/blog.js</code>, <code>routes/about.js</code> and <code>routes/contact.js</code> as soon as the page goes idle. Click any nav link — the chunk is already cached.</p>
    </article>
    <article>
      <h2>How it's wired up</h2>
      <p>The nav links all point at HTML paths (e.g. <code>/demos/spa/blog</code>) but each has a <code>data-chunk</code> attribute. We pass an <code>hrefFn</code> to <code>quicklink.listen()</code> that maps the link to its chunk URL — so the prefetch grabs the JS, not the HTML.</p>
    </article>
    <p class="callout">Source: <code>app.js</code> sets up the router and Quicklink. Each route lives in <code>routes/&lt;name&gt;.js</code>.</p>
  `;
}
