import { API_ENDPOINT } from './config';

const getRestaurants = (loading) => {
  const promise = new Promise((resolved, rejected) => {
    loading.show();

    fetch(`${API_ENDPOINT}list`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          rejected(data);
        } else {
          resolved(data.restaurants);
        }
      })
      .finally(() => {
        loading.remove();
      });
  });

  return promise;
};

const getRestaurantDetails = (restaurantId, loading) => {
  const promise = new Promise((resolved, rejected) => {
    loading.show();

    fetch(`${API_ENDPOINT}detail/${restaurantId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          rejected(data);
        } else {
          resolved(data.restaurant);
        }
      })
      .finally(() => {
        loading.remove();
      });
  });

  return promise;
};

export { getRestaurants, getRestaurantDetails };
