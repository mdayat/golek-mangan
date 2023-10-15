import { RestaurantHeadline } from '../components/restaurant/Headline';
import { RestaurantDetails } from '../components/restaurant/Details';
import { RestaurantReviews } from '../components/restaurant/Reviews';
import { Loading } from '../components/Loading';
import { PageNotFound } from '../components/PageNotFound';
import { getRestaurantDetails } from '../utils/restaurant';
import { parseActiveUrl } from '../utils/urlParser';

import { FavoriteButton } from '../components/restaurant/FavoriteButton';

const restaurantDetailsPageFunctionalities = (mainContent) => {
  const url = parseActiveUrl(false);
  const titleElement = document.getElementsByTagName('title')[0];

  getRestaurantDetails(url.dynamicPath, Loading(mainContent))
    .then((restaurant) => {
      titleElement.textContent = `Restaurant - ${restaurant.name}`;

      const restaurantHeadline = RestaurantHeadline(
        restaurant.name,
        restaurant.description,
        restaurant.pictureId,
      );
      mainContent.appendChild(restaurantHeadline);

      const detailAndReviewContainer = document.createElement('div');
      detailAndReviewContainer.setAttribute('class', 'detail-review-container');
      mainContent.appendChild(detailAndReviewContainer);

      const restaurantAddress = `${restaurant.address}, ${restaurant.city}`;
      const detailsElement = RestaurantDetails(
        restaurantAddress,
        restaurant.menus,
      );
      detailAndReviewContainer.appendChild(detailsElement);

      const reviewsElement = RestaurantReviews(restaurant.customerReviews);
      detailAndReviewContainer.appendChild(reviewsElement);

      const favouriteButton = FavoriteButton(restaurant);
      mainContent.appendChild(favouriteButton);
    })
    .catch(() => {
      mainContent.appendChild(PageNotFound());
      titleElement.textContent = 'Page Not Found';
    });
};

const Details = () => {
  const mainContent = document.getElementsByTagName('main')[0];
  restaurantDetailsPageFunctionalities(mainContent);
};

export { Details };
