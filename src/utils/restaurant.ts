import { API_ENDPOINT } from "./config";
import type { Restaurant } from "../types/restaurant";
import type { LoadingReturnType } from "../components/Loading";

type Callback<T> = (data: T[], errorMessage: string) => void;

interface RestaurantsResponse {
  error: boolean;
  message: string;
  count: number;
  restaurants: Restaurant[];
}

const getRestaurants = (
  loading: LoadingReturnType,
  callback: Callback<Restaurant>
) => {
  loading.show();

  let restaurants: Restaurant[] = [];
  let errorMessage = "";

  setTimeout(() => {
    fetch(`${API_ENDPOINT}list`, { method: "GET" })
      .then((response) => response.json())
      .then((data: RestaurantsResponse) => {
        if (data.error) {
          errorMessage = "Sorry! There is no Restaurants";
          callback(restaurants, errorMessage);
          return;
        }

        restaurants = data.restaurants;
        callback(restaurants, errorMessage);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        loading.remove();
      });
  }, 750);
};

export { getRestaurants };
