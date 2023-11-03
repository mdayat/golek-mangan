/* eslint-disable no-underscore-dangle */
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute, Route } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import { API_ENDPOINT, CACHE_NAME, IMAGE_ENDPOINT } from "../config";

precacheAndRoute(self.__WB_MANIFEST);

const restaurants = new Route(
  ({ url }) => {
    return url.href.startsWith(API_ENDPOINT);
  },
  new StaleWhileRevalidate({
    cacheName: CACHE_NAME,
  }),
);

const restaurantImages = new Route(
  ({ url }) => {
    return url.href.startsWith(IMAGE_ENDPOINT);
  },
  new StaleWhileRevalidate({
    cacheName: CACHE_NAME,
  }),
);

registerRoute(restaurants);
registerRoute(restaurantImages);

self.addEventListener("install", () => {
  self.skipWaiting();
});
