import { HeadlineArticle } from "../components/HeadlineArticle";
import { Loading } from "../components/Loading";
import { getRestaurants } from "../utils/restaurant";
import type { RestaurantCard } from "../components/RestaurantCard";

const handleHomePageFunctionalities = (homePageContent: HTMLElement) => {
  const restaurantsContainer = homePageContent.getElementsByClassName(
    "restaurants-container"
  )[0] as HTMLElement;

  getRestaurants(Loading(restaurantsContainer), (restaurants, errorMessage) => {
    if (errorMessage !== "") {
      const notfound = document.createElement("p");
      notfound.textContent = errorMessage;
      notfound.style.color = "#fff";
      restaurantsContainer.appendChild(notfound);
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
