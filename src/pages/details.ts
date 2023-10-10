import { Loading } from "../components/Loading";
import { getRestaurantDetails } from "../utils/restaurant";
import { SplittedUrl, parseActiveUrl } from "../utils/urlParser";

import type { RestaurantDetails } from "../components/RestaurantDetails";
import type { Restaurant } from "../types/restaurant";
import { PageNotFound } from "../components/PageNotFound";

const Details = () => {
  const url = parseActiveUrl(false) as SplittedUrl;
  const mainContent = document.getElementsByTagName("main")[0] as HTMLElement;

  getRestaurantDetails(
    url.dynamicPath,
    Loading(mainContent),
    (restaurant, isError) => {
      if (restaurant === null && isError) {
        mainContent.appendChild(PageNotFound());
        return;
      }

      const restaurantDetails = document.createElement(
        "restaurant-details"
      ) as RestaurantDetails;
      restaurantDetails.restaurant = restaurant as Restaurant;
      mainContent.appendChild(restaurantDetails);
    }
  );
};

export { Details };
