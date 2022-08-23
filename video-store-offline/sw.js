self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/ifksp/zgvr81.github.io/video-store-offline/',
       '/ifksp/zgvr81.github.io/video-store-offline/index.html',
       '/ifksp/zgvr81.github.io/video-store-offline/index.js',
       '/ifksp/zgvr81.github.io/video-store-offline/style.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
