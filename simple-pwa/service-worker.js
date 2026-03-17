const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
  '/Web-Dev---AJ/simple-pwa/index.html',
  '/Web-Dev---AJ/simple-pwa/manifest.json',
  '/Web-Dev---AJ/simple-pwa/app.js',
  '/Web-Dev---AJ/simple-pwa/service-worker.js',
  '/Web-Dev---AJ/simple-pwa/icon.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
