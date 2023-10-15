import { openDB } from 'idb';
import { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } from './config';

const indexedDB = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const getFavoriteRestaurant = (restaurantId) => {
  let errMsg = '';

  const promise = new Promise((resolved, rejected) => {
    indexedDB.then((db) => {
      db.get(OBJECT_STORE_NAME, restaurantId).then((favoritedRestaurant) => {
        if (favoritedRestaurant === undefined) {
          errMsg = `There is no restaurant you are looking for`;
          rejected(errMsg);
        } else {
          resolved(favoritedRestaurant);
        }
      });
    });
  });

  return promise;
};

const getFavoriteRestaurants = () => {
  const promise = new Promise((resolved) => {
    indexedDB.then((db) => {
      db.getAll(OBJECT_STORE_NAME).then((values) => {
        resolved(values);
      });
    });
  });

  return promise;
};

const addFavoriteRestaurant = (restaurant) => {
  let successMsg = '';
  let errMsg = '';

  const promise = new Promise((resolved, rejected) => {
    indexedDB.then((db) => {
      db.add(OBJECT_STORE_NAME, restaurant)
        .then(() => {
          successMsg = `Successfully added "${restaurant.name}" to Favorited Restaurant`;
          resolved({ restaurantId: restaurant.id, successMsg });
        })
        .catch(() => {
          errMsg = `Restaurant with the id of "${restaurant.id}" already added`;
          rejected(errMsg);
        });
    });
  });

  return promise;
};

const deleteFavoriteRestaurant = (restaurantId) => {
  const promise = new Promise((resolved) => {
    indexedDB.then((db) => {
      db.delete(OBJECT_STORE_NAME, restaurantId).then((value) => {
        resolved(value);
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
