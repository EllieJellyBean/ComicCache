// using const threw errors -> Changed to let && errors resolved
let staticCache = 'static-cache';
let dynamicCache = `dynamicCache`;
let fontCache = `fontCache`;
let imageCache = `imageCache`;

let staticContent = [
  '/index.html',
  '/index.js',
  '/newicon.png',
  '/logo.png',
  '/manifest.json',
  '/robots.txt'
];

// let imgContent = [
// ]

self.addEventListener('install', event => {
  self.skipWaiting()
  console.log('installing service worker')
  event.waitUntil(
    caches.open(staticCache).then(cache => {
      cache.addAll(staticContent).then(
        () => {
          console.log(`${staticCache} has been updated`)
        },
        (err) => {
          console.warn(`failed to update${staticCache}`)
        }
      )
    })

  )
});

self.addEventListener('activate', event => {
  console.log('activating');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key != staticCache).map((key) => caches.delete(key))
      )
    })
  )
});

self.addEventListener('fetch', event => {
  console.log(`fetch request for ${event.request.url}`)
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

self.addEventListener('message', event => {

})
