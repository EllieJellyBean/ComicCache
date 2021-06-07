// using const threw errors -> Changed to let && errors resolved
let staticCache = 'static-cache';

let staticContent = [
  '/',
  '/index.html',
  '/index.js',
  '/index.css',
  '/manifest.json',
  '/favicon.ico',
  '/logo.png',
  '/maskable_icon.png',
  '/newicon.png',
  '/splash-logo.png',
  '/robots.txt',
];

self.addEventListener('install', event => {
  // sw has been installed
  self.skipWaiting()
  console.log('installing service worker')
  // building cache
  event.waitUntil(
    caches.open(staticCache)
      .then(cache => cache.addAll(staticContent))
  )
});

self.addEventListener('activate', event => {
  console.log('activating service worker')

  let cleaned = caches.keys()
    .then(keys => {
      keys.forEach(key => {
        if (key !== staticCache) {
          return caches.delete(key)
        }
      })
    })
  event.waitUntil(cleaned)
});

self.addEventListener('fetch', event => {
  console.log(`fetch request for ${event.request.url}`)
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes ||
        fetch(event.request)
          .then((fetchResponse) => {
            caches.open(staticCache).then(cache => {
              // Must clone bc we can't put in cache && browser
              cache.put(event.request, fetchResponse.clone());
              return fetchResponse;
          })
        })
    })
  )
});
