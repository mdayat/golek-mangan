import { openDB } from 'idb';
import { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } from './config';

const indexedDB = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const getFavouriteRestaurant = (restaurantId) => {
  let errMsg = '';

  const promise = new Promise((resolved, rejected) => {
    indexedDB.then((db) => {
      db.get(OBJECT_STORE_NAME, restaurantId).then((favouritedRestaurant) => {
        if (favouritedRestaurant === undefined) {
          errMsg = `There is no restaurant you are looking for`;
          rejected(errMsg);
        } else {
          resolved(favouritedRestaurant);
        }
      });
    });
  });

  return promise;
};

const getFavouriteRestaurants = () => {
  const promise = new Promise((resolved) => {
    indexedDB.then((db) => {
      db.getAll(OBJECT_STORE_NAME).then((values) => {
        resolved(values);
      });
    });
  });

  return promise;
};

const addFavouriteRestaurant = (restaurant) => {
  let successMsg = '';
  let errMsg = '';

  const promise = new Promise((resolved, rejected) => {
    indexedDB.then((db) => {
      db.add(OBJECT_STORE_NAME, restaurant)
        .then(() => {
          successMsg = `Successfully added "${restaurant.name}" to Favourited Restaurant`;
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

const deleteFavouriteRestaurant = (restaurantId) => {
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
  getFavouriteRestaurant,
  getFavouriteRestaurants,
  addFavouriteRestaurant,
  deleteFavouriteRestaurant,
};
