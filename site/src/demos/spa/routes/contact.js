export default function render(view) {
  view.innerHTML = `
    <span class="tag">Contact</span>
    <h1>Get in touch</h1>
    <p class="lede">Found a bug, or want to share what you're building with Quicklink? File an issue on GitHub.</p>
    <article>
      <h2>Quicklink on GitHub</h2>
      <p>Repository, issues, and discussions live at <a href="https://github.com/GoogleChromeLabs/quicklink" target="_blank" rel="noopener">github.com/GoogleChromeLabs/quicklink</a>.</p>
    </article>
    <article>
      <h2>Documentation</h2>
      <p>The <a href="/api">API reference</a>, <a href="/approach">approach</a>, and <a href="/measure">measurement</a> guides cover everything from installation to RUM measurement.</p>
    </article>
    <p class="callout">This contact route is a separate JS chunk — note in the Network panel that it was prefetched by <code>quicklink</code> while you were on the home or blog route.</p>
  `;
}
