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
