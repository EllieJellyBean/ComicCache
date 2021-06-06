const cacheName = 'my-cache';
const staticContent = [
  '/index.html',
  '/index.js',
  '/newicon.png'
]

self.addEventListener('install', event => {
  console.log('installing service worker')
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(staticContent))
  )
})