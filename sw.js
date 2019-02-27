;
const CACHE_NAME = 'v1_cache_pwa',
urlsToCache = [
    './',
    './img/kali.png',
    './style/justified-nav.css',
    './style/bootstrap.css',
    './scripts/script.js'
]

self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache =>{
            return cache.addAll(urlsToCache)
            .then(()=>self.skipWaiting())
        })
        .catch(err => console.log('Fallo registro de cache', err))
    )
})

self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cachesNames => {
            cachesNames.map(cacheName => {
                if(cacheWhitelist.indexOf(cacheName)===-1){
                    return caches.delete(cacheName)
                }
            })
        })
        .then(() => self.clients.claim())
    )
})

self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                return res
            }
            return fetch(e.request)
        })
    )
})
