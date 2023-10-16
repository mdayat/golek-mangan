import { API_ENDPOINT } from './config';

const getRestaurants = (loading) => {
  const promise = new Promise((resolve, reject) => {
    loading.show();

    fetch(`${API_ENDPOINT}list`, { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          reject(data);
        } else {
          resolve(data.restaurants);
        }
      })
      .finally(() => {
        loading.remove();
      });
  });

  return promise;
};

const getRestaurantDetails = (restaurantId, loading) => {
  const promise = new Promise((resolve, reject) => {
    loading.show();

    fetch(`${API_ENDPOINT}detail/${restaurantId}`, { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          reject(data);
        } else {
          resolve(data.restaurant);
        }
      })
      .finally(() => {
        loading.remove();
      });
  });

  return promise;
};

export { getRestaurants, getRestaurantDetails };
