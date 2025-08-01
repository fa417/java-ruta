const CACHE_NAME = 'jabakarta-cache-v1';
const urlsToCache = [
  '/index.html',
  '/js/script.js',
  '/img/iphone-icon.png',
  '/img/pwa-icon.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
