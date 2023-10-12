import "../components/restaurant/Card";

import { HeadlineArticle } from "../components/HeadlineArticle";
import { Loading } from "../components/Loading";
import { getRestaurants } from "../utils/restaurant";
import { EmptyRestaurant } from "../components/restaurant/Empty";

import type { RestaurantCard } from "../components/restaurant/Card";

const handleHomeFunctionalities = (mainContent: HTMLElement) => {
  const restaurantsContainer = mainContent.getElementsByClassName(
    "restaurants-container"
  )[0] as HTMLElement;

  getRestaurants(Loading(restaurantsContainer), (restaurants, isError) => {
    if (restaurants === null || isError) {
      const emptyRestaurant = EmptyRestaurant();
      restaurantsContainer.appendChild(emptyRestaurant);
      return;
    }

    for (const restaurant of restaurants) {
      const restaurantCard = document.createElement(
        "restaurant-card"
      ) as RestaurantCard;
      restaurantCard.restaurant = restaurant;
      restaurantsContainer.appendChild(restaurantCard);
    }
  });
};

const Home = () => {
  const titleElement = document.getElementsByTagName(
    "title"
  )[0] as HTMLTitleElement;
  titleElement.textContent = "Golek Mangan";

  const mainContent = document.getElementsByTagName("main")[0] as HTMLElement;
  const headlineArticle = HeadlineArticle();
  mainContent.appendChild(headlineArticle);

  const restaurantsContainer = document.createElement("section");
  restaurantsContainer.setAttribute("class", "restaurants-container");
  mainContent.appendChild(restaurantsContainer);

  const restaurantsContainerTitle = document.createElement("h2");
  restaurantsContainerTitle.textContent = "Explore Restaurants";
  restaurantsContainer.appendChild(restaurantsContainerTitle);

  handleHomeFunctionalities(mainContent);
};

export { Home };
