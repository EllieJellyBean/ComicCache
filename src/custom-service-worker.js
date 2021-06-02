self.addEventListener(type: 'fetch', listener: e => {
  console.log(`intercepting ${e.request.method} to ${e.request.url}`)
})
