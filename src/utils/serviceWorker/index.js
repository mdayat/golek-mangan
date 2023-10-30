import { deleteInvalidCaches, precaching, revalidateCache } from "./cache";

self.addEventListener("install", (event) => {
  event.waitUntil(precaching());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(deleteInvalidCaches());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method === "GET") {
    if (event.request.destination === "image") {
      event.respondWith(revalidateCache(event.request.url));
    } else {
      event.respondWith(revalidateCache(event.request));
    }
  }
});
