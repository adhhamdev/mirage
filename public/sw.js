self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('mirage-ai-v1').then((cache) => {
      return cache.addAll(['/', '/index.html', '/manifest.json', '/logo.png']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
