import { EmptyRestaurant } from '../components/restaurant/Empty';
import { getFavouriteRestaurants } from '../utils/indexedDB';

const favourteFunctionalities = (mainContent) => {
  const restaurantsContainer = mainContent.getElementsByClassName(
    'restaurants-container',
  )[0];

  getFavouriteRestaurants().then((favouriteRestaurants) => {
    if (favouriteRestaurants.length === 0) {
      const emptyRestaurant = EmptyRestaurant();
      restaurantsContainer.appendChild(emptyRestaurant);
      return;
    }

    favouriteRestaurants.forEach((favouriteRestaurant) => {
      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.restaurant = favouriteRestaurant;
      restaurantsContainer.appendChild(restaurantCard);
    });
  });
};

const Favourite = () => {
  const titleElement = document.getElementsByTagName('title')[0];
  titleElement.textContent = 'Restaurant - Favourites';

  const mainContent = document.getElementsByTagName('main')[0];

  const restaurantsContainer = document.createElement('section');
  restaurantsContainer.setAttribute('class', 'restaurants-container');
  mainContent.appendChild(restaurantsContainer);

  const restaurantsContainerTitle = document.createElement('h2');
  restaurantsContainerTitle.textContent = 'Explore Favourite Restaurants';
  restaurantsContainer.appendChild(restaurantsContainerTitle);

  favourteFunctionalities(mainContent);
};

export { Favourite };
