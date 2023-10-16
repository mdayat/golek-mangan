import { CACHE_NAME } from '../config';

const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './favicon.ico',
  './apple-touch-icon.png',
  './hero-image.jpg',
  './hangout-image.jpg',
  './index.html',
  './app.webmanifest',
  './main.js',
  './serviceWorker.js',
];

const precaching = () => {
  const promise = caches.open(CACHE_NAME).then((cache) => {
    cache.addAll(assetsToCache);
  });

  return promise;
};

const deleteInvalidCaches = () => {
  const promise = caches.keys().then((cacheNames) => {
    const invalidCaches = [];

    for (let i = 0; i < cacheNames.length; i++) {
      if (cacheNames[i] !== CACHE_NAME) {
        invalidCaches.push(cacheNames[i]);
      }
    }

    return Promise.all(
      invalidCaches.map((cacheName) => {
        return caches.delete(cacheName);
      }),
    );
  });

  return promise;
};

const fetchRequest = (request, cache) => {
  const promise = fetch(request).then((response) => {
    cache.put(request, response.clone());
    return response;
  });

  return promise;
};

const revalidateCache = (request) => {
  const promise = caches.open(CACHE_NAME).then((cache) => {
    return cache.match(request).then((cachedResponse) => {
      if (cachedResponse !== undefined) {
        fetchRequest(request, cache);
        return cachedResponse;
      }

      return fetchRequest(request, cache);
    });
  });

  return promise;
};

export { revalidateCache, precaching, deleteInvalidCaches };
