import "../components/restaurant/Card";

import { HeadlineArticle } from "../components/HeadlineArticle";
import { Loading } from "../components/Loading";
import { getRestaurants } from "../utils/restaurant";
import { SVG_NAMESPACE } from "../utils/config";

import type { RestaurantCard } from "../components/restaurant/Card";

const EmptyRestaurant = (): HTMLElement => {
  const emptyRestaurant = document.createElement("div");
  emptyRestaurant.setAttribute("class", "empty-restaurant");

  const sadFaceIcon = document.createElementNS(SVG_NAMESPACE, "svg");
  sadFaceIcon.setAttribute("xmlns", SVG_NAMESPACE);
  sadFaceIcon.setAttribute("viewBox", "0 0 512 512");
  emptyRestaurant.appendChild(sadFaceIcon);

  const sadFaceIconPath = document.createElementNS(SVG_NAMESPACE, "path");
  sadFaceIconPath.setAttribute(
    "d",
    "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
  );
  sadFaceIcon.appendChild(sadFaceIconPath);

  const emptyMessage = document.createElement("p");
  emptyMessage.textContent = "Oops... there are no restaurants to show!";
  emptyRestaurant.appendChild(emptyMessage);

  return emptyRestaurant;
};

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
