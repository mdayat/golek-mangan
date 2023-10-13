import { openDB } from 'idb';
import { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } from './config';

const indexedDB = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const getFavouriteRestaurant = async (restaurantId) => {
  const restaurant = (await indexedDB).get(OBJECT_STORE_NAME, restaurantId);
  return restaurant;
};

const getFavouriteRestaurants = async () => {
  const restaurants = (await indexedDB).getAll(OBJECT_STORE_NAME);
  return restaurants;
};

const addFavouriteRestaurant = async (restaurant) => {
  (await indexedDB).add(OBJECT_STORE_NAME, restaurant);
};

const deleteFavouriteRestaurant = async (restaurantId) => {
  (await indexedDB).delete(OBJECT_STORE_NAME, restaurantId);
};

export {
  indexedDB,
  getFavouriteRestaurant,
  getFavouriteRestaurants,
  addFavouriteRestaurant,
  deleteFavouriteRestaurant,
};
