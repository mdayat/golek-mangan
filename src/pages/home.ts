import { HeadlineArticle } from "../components/HeadlineArticle";
import type { RestaurantCard } from "../components/RestaurantCard";
import type { Restaurant } from "../types/restaurant";

const handleHomePageFunctionalities = (homePageContent: HTMLElement) => {
  const restaurants: Restaurant[] = [];
  const restaurantsContainer = homePageContent.getElementsByClassName(
    "restaurants-container"
  )[0] as HTMLElement;

  for (const restaurant of restaurants) {
    const restaurantCard = document.createElement(
      "restaurant-card"
    ) as RestaurantCard;
    restaurantCard.restaurant = restaurant;
    restaurantsContainer.appendChild(restaurantCard);
  }
};

const Home = () => {
  const titleElement = document.getElementsByTagName(
    "title"
  )[0] as HTMLTitleElement;
  titleElement.textContent = "Golek Mangan";

  const homePageContent = document.getElementsByTagName(
    "main"
  )[0] as HTMLElement;
  const headlineArticle = HeadlineArticle();
  homePageContent.appendChild(headlineArticle);

  const restaurantsContainer = document.createElement("section");
  restaurantsContainer.setAttribute("class", "restaurants-container");
  homePageContent.appendChild(restaurantsContainer);

  const restaurantsContainerTitle = document.createElement("h2");
  restaurantsContainerTitle.textContent = "Explore Restaurants";
  restaurantsContainer.appendChild(restaurantsContainerTitle);

  handleHomePageFunctionalities(homePageContent);
};

export { Home };
