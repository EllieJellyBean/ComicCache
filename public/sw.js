// using const threw errors -> Changed to let && errors resolved
let staticCache = 'static-cache';

let staticContent = [
  '/Utils/APICalls.js',
  '/Utils/cleaningFunctions.js',
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
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }

      return fetch(event.request).then((newResponse) => {
        caches.open(staticCache).then((cache) => cache.put(event.request, newResponse))
        return newResponse.clone()
      })
    })
  )
});
