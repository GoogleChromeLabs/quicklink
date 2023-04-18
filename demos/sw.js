importScripts('https://unpkg.com/network-idle-callback@1.0.1/lib/request-monitor.js');

self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] Fetch', event.request.url);
  self.requestMonitor.listen(event);

  const promise = fetch(event.request)
      .then(response => {
        console.log('done', event.clientId);
        self.requestMonitor.unlisten(event);
        return response;
      })
      .catch(error => {
        console.log('error');
        self.requestMonitor.unlisten(error);
      });

  event.respondWith(promise);
});
