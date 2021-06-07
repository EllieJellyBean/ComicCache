// using const threw errors -> Changed to let && errors resolved
let staticCache = 'static-cache';

let staticContent = [
  '/index.html',
  '/index.js',
  '/index.css',
  '/newicon.png',
  '/logo.png',
  '/manifest.json',
  '/robots.txt'
];

self.addEventListener('install', event => {
  // sw has been installed
  self.skipWaiting()
  // console.log('installing service worker')
  // building cache
  event.waitUntil(
    caches.open(staticCache).then(cache => {
      cache.addAll(staticContent).then(
        () => {
          console.log(`${staticCache} has been updated`)
        },
        (err) => {
          console.warn(`failed to update ${staticCache}`)
        }
      )
    })
  )
});

self.addEventListener('activate', event => {
  // when sw has activated to replace old one
  // console.log('activating');
  // delete old caches
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key != staticCache).map((key) => caches.delete(key))
      )
    })
  )
});

self.addEventListener('fetch', event => {
  // console.log(`fetch request for ${event.request.url}`)
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes || fetch(event.request)
        .then(fetchResponse => {
          console.log(`save cache files ${event.request.url}`);
          caches.open(staticCache).then(cache => {
            // Must clone bc we can't put it in the cache AND give
            // it back to the browser - Can only use once!
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          })
        })
    })
  )
});
