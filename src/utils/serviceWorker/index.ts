import { deleteOldCache, preCache, revalidateCache } from "./cache";

self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(preCache());
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil(deleteOldCache());
});

self.addEventListener("fetch", (event: FetchEvent) => {
  if (event.request.destination === "image") {
    event.respondWith(revalidateCache(event.request.url));
  } else {
    event.respondWith(revalidateCache(event.request));
  }
});
