import { RestaurantHeadline } from "../components/restaurant/Headline";
import { RestaurantDetails } from "../components/restaurant/Details";
import { RestaurantReviews } from "../components/restaurant/Reviews";
import { Loading } from "../components/Loading";
import { PageNotFound } from "../components/PageNotFound";
import { getRestaurantDetails } from "../utils/restaurant";
import { parseActiveUrl } from "../utils/urlParser";

import type { SplittedUrl } from "../utils/urlParser";
import { FavouriteButton } from "../components/restaurant/FavouriteButton";

const restaurantDetailsPageFunctionalities = (mainContent: HTMLElement) => {
  const url = parseActiveUrl(false) as SplittedUrl;
  const titleElement = document.getElementsByTagName(
    "title"
  )[0] as HTMLTitleElement;

  getRestaurantDetails(
    url.dynamicPath,
    Loading(mainContent),
    (restaurant, isError) => {
      if (restaurant === null || isError) {
        mainContent.appendChild(PageNotFound());
        titleElement.textContent = "Page Not Found";
        return;
      }

      titleElement.textContent = `Restaurant - ${restaurant.name}`;

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

      const favouriteButton = FavouriteButton(restaurant);
      mainContent.appendChild(favouriteButton);
    }
  );
};

const Details = () => {
  const mainContent = document.getElementsByTagName("main")[0] as HTMLElement;
  restaurantDetailsPageFunctionalities(mainContent);
};

export { Details };
