import { RestaurantHeadline } from "../components/restaurant/Headline";
import { RestaurantDetails } from "../components/restaurant/Details";
import { RestaurantReviews } from "../components/restaurant/Reviews";
import { Loading } from "../components/Loading";
import { PageNotFound } from "../components/PageNotFound";
import { getRestaurantDetails } from "../utils/restaurant";
import { parseActiveUrl } from "../utils/urlParser";

import type { SplittedUrl } from "../utils/urlParser";

const handleDetailsPageFunctionalities = (mainContent: HTMLElement) => {
  const url = parseActiveUrl(false) as SplittedUrl;

  getRestaurantDetails(
    url.dynamicPath,
    Loading(mainContent),
    (restaurant, isError) => {
      if (restaurant === null || isError) {
        mainContent.appendChild(PageNotFound());
        return;
      }

      const restaurantHeadline = RestaurantHeadline(
        restaurant.name,
        restaurant.description,
        restaurant.pictureId
      );
      mainContent.appendChild(restaurantHeadline);

      const detailAndReviewContainer = document.createElement("div");
      detailAndReviewContainer.setAttribute("class", "detail-review-container");
      mainContent.appendChild(detailAndReviewContainer);

      const restaurantAddress = `${restaurant.address}, ${restaurant.city}`;
      const detailsElement = RestaurantDetails(
        restaurantAddress,
        restaurant.menus
      );
      detailAndReviewContainer.appendChild(detailsElement);

      const reviewsElement = RestaurantReviews(restaurant.customerReviews);
      detailAndReviewContainer.appendChild(reviewsElement);
    }
  );
};

const Details = () => {
  const mainContent = document.getElementsByTagName("main")[0] as HTMLElement;
  handleDetailsPageFunctionalities(mainContent);
};

export { Details };