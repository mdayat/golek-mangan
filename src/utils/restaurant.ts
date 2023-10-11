import { API_ENDPOINT } from "./config";
import type { Restaurant } from "../types/restaurant";
import type { LoadingReturnType } from "../components/Loading";

type Callback<T> = (data: T | null, isError: boolean) => void;

interface RestaurantsResponse {
  error: boolean;
  message: string;
  count: number;
  restaurants: Restaurant[];
}

interface RestaurantDetailsResponse {
  error: boolean;
  message: string;
  restaurant: Restaurant;
}

const getRestaurants = (
  loading: LoadingReturnType,
  callback: Callback<Restaurant[]>
) => {
  let restaurants: Restaurant[] | null = null;
  loading.show();

  setTimeout(() => {
    fetch(`${API_ENDPOINT}list`, { method: "GET" })
      .then((response) => response.json())
      .then((data: RestaurantsResponse) => {
        if (data.error) {
          callback(restaurants, data.error);
          return;
        }

        restaurants = data.restaurants;
        callback(restaurants, data.error);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        loading.remove();
      });
  }, 500);
};

const getRestaurantDetails = (
  restaurantId: string,
  loading: LoadingReturnType,
  callback: Callback<Restaurant>
) => {
  let restaurant: Restaurant | null = null;
  loading.show();

  setTimeout(() => {
    fetch(`${API_ENDPOINT}/detail/${restaurantId}`, { method: "GET" })
      .then((response) => response.json())
      .then((data: RestaurantDetailsResponse) => {
        if (data.error) {
          callback(restaurant, data.error);
          return;
        }

        restaurant = data.restaurant;
        callback(restaurant, data.error);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        loading.remove();
      });
  }, 500);
};

export { getRestaurants, getRestaurantDetails };
