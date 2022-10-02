const QR_CODE_TOOLS_CACHE = "version-1";
//Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(QR_CODE_TOOLS_CACHE).then((cache) => {
      return cache.addAll(["index.html", "offline.html"]);
    })
  );
});

//Listen SW
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

self.addEventListener("message", (e) => {
  if (e.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
//Activate
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(QR_CODE_TOOLS_CACHE);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
