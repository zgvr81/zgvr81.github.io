self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('video-store').then(function (cache) {
            return cache.addAll([
                '/zgvr81.github.io/',
                '/zgvr81.github.io/off.html',
                '/zgvr81.github.io/off.js',
                '/zgvr81.github.io/off.css'
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