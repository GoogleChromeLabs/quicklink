const posts = [
  {
    title: 'Prefetching for the next click',
    date: '2024-09-12',
    excerpt: 'How we shaved 800ms off our median navigation by prefetching in-viewport links during idle time.',
  },
  {
    title: 'Beyond the bundle: route-level code splitting',
    date: '2024-08-30',
    excerpt: 'A walkthrough of how we split a large React app into per-route chunks and prefetch them with Quicklink.',
  },
  {
    title: 'Measuring the right thing',
    date: '2024-08-04',
    excerpt: 'Web Vitals are the floor, not the ceiling. Here is how we instrumented click-to-paint as a real-user metric.',
  },
  {
    title: 'A budget for client-side JavaScript',
    date: '2024-07-18',
    excerpt: 'Why we set a hard 170 KB budget for first-party JS, and the build-time guards that keep us honest.',
  },
];

export default function render(view) {
  view.innerHTML = `
    <span class="tag">Blog</span>
    <h1>Recent posts</h1>
    <p class="lede">Notes on web performance, navigations, and shipping fast software.</p>
    ${posts.map(p => `
      <article>
        <h2>${p.title}</h2>
        <time>${new Date(p.date).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}</time>
        <p>${p.excerpt}</p>
      </article>
    `).join('')}
  `;
}
