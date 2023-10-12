import { EmptyRestaurant } from "../components/restaurant/Empty";
import { getFavouriteRestaurants } from "../utils/indexedDB";
import type { RestaurantCard } from "../components/restaurant/Card";
import { Restaurant } from "../types/restaurant";

const handleFavourteFunctionalities = (mainContent: HTMLElement) => {
  const restaurantsContainer = mainContent.getElementsByClassName(
    "restaurants-container"
  )[0] as HTMLElement;

  getFavouriteRestaurants().then((favouriteRestaurants: Restaurant[]) => {
    if (favouriteRestaurants.length === 0) {
      const emptyRestaurant = EmptyRestaurant();
      restaurantsContainer.appendChild(emptyRestaurant);
      return;
    }

    for (const restaurant of favouriteRestaurants) {
      const restaurantCard = document.createElement(
        "restaurant-card"
      ) as RestaurantCard;
      restaurantCard.restaurant = restaurant;
      restaurantsContainer.appendChild(restaurantCard);
    }
  });
};

const Favourite = () => {
  const titleElement = document.getElementsByTagName(
    "title"
  )[0] as HTMLTitleElement;
  titleElement.textContent = "Restaurant - Favourites";

  const mainContent = document.getElementsByTagName("main")[0] as HTMLElement;

  const restaurantsContainer = document.createElement("section");
  restaurantsContainer.setAttribute("class", "restaurants-container");
  mainContent.appendChild(restaurantsContainer);

  const restaurantsContainerTitle = document.createElement("h2");
  restaurantsContainerTitle.textContent = "Explore Favourite Restaurants";
  restaurantsContainer.appendChild(restaurantsContainerTitle);

  handleFavourteFunctionalities(mainContent);
};

export { Favourite };
