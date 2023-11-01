import { openDB } from "idb";
import { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } from "./config";

const indexedDB = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

const getFavoriteRestaurant = (restaurantId) => {
  const promise = new Promise((resolve) => {
    indexedDB.then((db) => {
      db.get(OBJECT_STORE_NAME, restaurantId).then((favoritedRestaurant) => {
        if (favoritedRestaurant === undefined) {
          resolve([]);
        } else {
          resolve(favoritedRestaurant);
        }
      });
    });
  });

  return promise;
};

const getFavoriteRestaurants = () => {
  const promise = new Promise((resolve) => {
    indexedDB.then((db) => {
      db.getAll(OBJECT_STORE_NAME).then((values) => {
        resolve(values);
      });
    });
  });

  return promise;
};

const addFavoriteRestaurant = (restaurant) => {
  let successMsg = "";
  let errMsg = "";

  const promise = new Promise((resolve, reject) => {
    indexedDB.then((db) => {
      db.add(OBJECT_STORE_NAME, restaurant)
        .then(() => {
          successMsg = `Successfully added "${restaurant.name}" to Favorited Restaurant`;
          resolve({ restaurantId: restaurant.id, successMsg });
        })
        .catch(() => {
          errMsg = `Restaurant with the id of "${restaurant.id}" already added`;
          reject(errMsg);
        });
    });
  });

  return promise;
};

const deleteFavoriteRestaurant = (restaurantId) => {
  const promise = new Promise((resolve) => {
    indexedDB.then((db) => {
      db.delete(OBJECT_STORE_NAME, restaurantId).then((value) => {
        resolve(value);
      });
    });
  });

  return promise;
};

export {
  getFavoriteRestaurant,
  getFavoriteRestaurants,
  addFavoriteRestaurant,
  deleteFavoriteRestaurant,
};
