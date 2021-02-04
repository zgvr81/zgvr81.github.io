self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('video-store').then(function (cache) {
            return cache.addAll([
                '/zgvr81/zgvr81.github.io/blob/master/ex30%20B/',
                '/zgvr81/zgvr81.github.io/blob/master/ex30%20B/offline.html',
                '/zgvr81/zgvr81.github.io/blob/master/ex30%20B/index.js',
                '/zgvr81/zgvr81.github.io/blob/master/ex30%20B/style.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});