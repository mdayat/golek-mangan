import "../components/restaurant/Card";

import { HeadlineArticle } from "../components/HeadlineArticle";
import { Loading } from "../components/Loading";
import { getRestaurants } from "../utils/restaurant";

import type { RestaurantCard } from "../components/restaurant/Card";
import type { Restaurant } from "../types/restaurant";

const handleHomePageFunctionalities = (mainContent: HTMLElement) => {
  const restaurantsContainer = mainContent.getElementsByClassName(
    "restaurants-container"
  )[0] as HTMLElement;

  getRestaurants(Loading(restaurantsContainer), (restaurants, isError) => {
    if (restaurants === null && isError) {
      const notfound = document.createElement("p");
      notfound.textContent = "Sorry... there is no restaurants here";
      notfound.style.color = "#fff";
      restaurantsContainer.appendChild(notfound);
      return;
    }

    for (const restaurant of restaurants as Restaurant[]) {
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

  handleHomePageFunctionalities(mainContent);
};

export { Home };
