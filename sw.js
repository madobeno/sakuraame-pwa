self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("sakuraame-v1").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./index.css",
        "./assets/"
      ])
    )
  );
});
