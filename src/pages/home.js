import '../components/restaurant/Card';

import { HeadlineArticle } from '../components/HeadlineArticle';
import { Loading } from '../components/Loading';
import { getRestaurants } from '../utils/restaurant';
import { EmptyRestaurant } from '../components/restaurant/Empty';

const handleHomeFunctionalities = (mainContent) => {
  const restaurantsContainer = mainContent.getElementsByClassName(
    'restaurants-container'
  )[0];

  getRestaurants(Loading(restaurantsContainer), (restaurants, isError) => {
    if (restaurants === null || isError) {
      const emptyRestaurant = EmptyRestaurant();
      restaurantsContainer.appendChild(emptyRestaurant);
      return;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const restaurant of restaurants) {
      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.restaurant = restaurant;
      restaurantsContainer.appendChild(restaurantCard);
    }
  });
};

const Home = () => {
  const titleElement = document.getElementsByTagName('title')[0];
  titleElement.textContent = 'Golek Mangan';

  const mainContent = document.getElementsByTagName('main')[0];
  const headlineArticle = HeadlineArticle();
  mainContent.appendChild(headlineArticle);

  const restaurantsContainer = document.createElement('section');
  restaurantsContainer.setAttribute('class', 'restaurants-container');
  mainContent.appendChild(restaurantsContainer);

  const restaurantsContainerTitle = document.createElement('h2');
  restaurantsContainerTitle.textContent = 'Explore Restaurants';
  restaurantsContainer.appendChild(restaurantsContainerTitle);

  handleHomeFunctionalities(mainContent);
};

export { Home };