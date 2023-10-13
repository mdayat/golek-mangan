import { API_ENDPOINT } from './config';

const getRestaurants = (loading, callback) => {
  let restaurants = null;
  loading.show();

  setTimeout(() => {
    fetch(`${API_ENDPOINT}list`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          callback(restaurants, data.error);
          return;
        }

        restaurants = data.restaurants;
        callback(restaurants, data.error);
      })
      .finally(() => {
        loading.remove();
      });
  }, 500);
};

const getRestaurantDetails = (restaurantId, loading, callback) => {
  let restaurant = null;
  loading.show();

  setTimeout(() => {
    fetch(`${API_ENDPOINT}/detail/${restaurantId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          callback(restaurant, data.error);
          return;
        }

        restaurant = data.restaurant;
        callback(restaurant, data.error);
      })
      .finally(() => {
        loading.remove();
      });
  }, 500);
};

export { getRestaurants, getRestaurantDetails };
