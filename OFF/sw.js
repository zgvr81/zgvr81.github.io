self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('video-store').then(function (cache) {
            return cache.addAll([
                '/zgvr81/zgvr81.github.io/blob/master/OFF/',
                '/zgvr81/zgvr81.github.io/blob/master/OFF/index.html',
                '/zgvr81/zgvr81.github.io/blob/master/OFF/index.js',
                '/zgvr81/zgvr81.github.io/blob/master/OFF/style.css'
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