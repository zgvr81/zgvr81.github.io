self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('video-store').then(function (cache) {
            return cache.addAll([
                '/ifksp/zgvr81.github.io/',
                '/ifksp/zgvr81.github.io/off.html',
                '/ifksp/zgvr81.github.io/off.js',
                '/ifksp/zgvr81.github.io/off.css'
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