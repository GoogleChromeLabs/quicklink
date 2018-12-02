importScripts('https://unpkg.com/network-idle-callback@1.0.1/lib/request-monitor.js');

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  self.requestMonitor.listen(e);

  const promise = fetch(e.request)
      .then(response => {
        console.log('done', e.clientId);
        self.requestMonitor.unlisten(e);
        return response;
      })
      .catch(e => {
        console.log('error');
        self.requestMonitor.unlisten(e);
      });

  e.respondWith(promise);
});
