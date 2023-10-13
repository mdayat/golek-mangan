import { deleteOldCache, preCache, revalidateCache } from './cache';

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  event.waitUntil(preCache());
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
  event.waitUntil(deleteOldCache());
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(revalidateCache(event.request.url));
  } else {
    event.respondWith(revalidateCache(event.request));
  }
});
