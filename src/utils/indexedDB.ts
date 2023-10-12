import { openDB } from "idb";
import { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } from "./config";
import type { Restaurant } from "../types/restaurant";

const indexedDB = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

const getFavouriteRestaurant = async (restaurantId: string) => {
  return (await indexedDB).get(OBJECT_STORE_NAME, restaurantId);
};

const getFavouriteRestaurants = async () => {
  return (await indexedDB).getAll(OBJECT_STORE_NAME);
};

const addFavouriteRestaurant = async (restaurant: Restaurant) => {
  return (await indexedDB).add(OBJECT_STORE_NAME, restaurant);
};

const deleteFavouriteRestaurant = async (restaurantId: string) => {
  return (await indexedDB).delete(OBJECT_STORE_NAME, restaurantId);
};

export {
  indexedDB,
  getFavouriteRestaurant,
  getFavouriteRestaurants,
  addFavouriteRestaurant,
  deleteFavouriteRestaurant,
};
