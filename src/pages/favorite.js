import { EmptyRestaurant } from "../components/restaurant/Empty";
import { getFavoriteRestaurants } from "../utils/indexedDB";

const favoriteFunctionalities = (mainContent) => {
  const restaurantsContainer = mainContent.getElementsByClassName(
    "restaurants-container",
  )[0];

  getFavoriteRestaurants().then((favoritedRestaurants) => {
    if (favoritedRestaurants.length === 0) {
      const emptyRestaurant = EmptyRestaurant();
      restaurantsContainer.appendChild(emptyRestaurant);
      return;
    }

    favoritedRestaurants.forEach((favoriteRestaurant) => {
      const restaurantCard = document.createElement("restaurant-card");
      restaurantCard.restaurant = favoriteRestaurant;
      restaurantsContainer.appendChild(restaurantCard);
    });
  });
};

const Favorite = () => {
  const titleElement = document.getElementsByTagName("title")[0];
  titleElement.textContent = "Restaurant - Favorites";

  const mainContent = document.getElementsByTagName("main")[0];

  const restaurantsContainer = document.createElement("section");
  restaurantsContainer.setAttribute("class", "restaurants-container");
  mainContent.appendChild(restaurantsContainer);

  const restaurantsContainerTitle = document.createElement("h2");
  restaurantsContainerTitle.textContent = "Explore Favorite Restaurants";
  restaurantsContainer.appendChild(restaurantsContainerTitle);

  favoriteFunctionalities(mainContent);
};

export { Favorite };
