import { CACHE_NAME } from "../config";

const assetsToCache = [
  "./",
  "./icons/icon-72x72.png",
  "./icons/icon-96x96.png",
  "./icons/icon-128x128.png",
  "./icons/icon-144x144.png",
  "./icons/icon-152x152.png",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
  "./favicon.ico",
  "apple-touch-icon.png",
  "hero-image.jpg",
  "hangout-image.jpg",
  "./index.html",
  "./app.webmanifest",
  "./main.js",
  "./serviceWorker.js",
];

const preCache = async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(assetsToCache);
};

const deleteOldCache = async () => {
  const cacheNames = await caches.keys();

  for (let index = 0; index < cacheNames.length; index++) {
    if (cacheNames[index] !== CACHE_NAME) {
      await caches.delete(cacheNames[index] as string);
    }
  }
};

const revalidateCache = async (request: Request) => {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    await fetchRequest(request);
    return cachedResponse;
  }

  return fetchRequest(request);
};

const addCache = async (request: Request) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.add(request);
};

const fetchRequest = async (request: Request) => {
  const response = await fetch(request);

  if (response.status !== 200) {
    return response;
  }

  await addCache(request);
  return response;
};

export { revalidateCache, preCache, deleteOldCache, assetsToCache };
