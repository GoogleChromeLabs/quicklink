export default function render(view) {
  view.innerHTML = `
    <span class="tag">About</span>
    <h1>About this demo</h1>
    <p class="lede">A vanilla JS single-page app, around 60 lines of router code, hand-rolled to keep the moving parts visible.</p>
    <article>
      <h2>What's in here</h2>
      <p>An <code>index.html</code> shell, an <code>app.js</code> that handles history and view rendering, and a route module per page. There's no framework — the goal is to show how Quicklink integrates with a SPA, not to recommend a stack.</p>
    </article>
    <article>
      <h2>Why prefetch chunks?</h2>
      <p>In a SPA, navigating from one route to another usually means downloading and executing the next route's JavaScript. If the user is on a slow connection, that download happens after they click — adding a visible delay. Prefetching the chunk during idle time eliminates the wait.</p>
    </article>
    <article>
      <h2>What Quicklink does here</h2>
      <p>It observes the nav links with <code>IntersectionObserver</code>, waits for <code>requestIdleCallback</code>, and prefetches each link's chunk URL using <code>&lt;link rel="prefetch"&gt;</code>. When you click, the browser serves the JS from its prefetch cache and <code>import()</code> resolves immediately.</p>
    </article>
  `;
}
