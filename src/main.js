import "./components/RestaurantCard.js";
import "./styles/reset.css";
import "./main.css";

import data from "./public/data.json";
import { handleClickHamburgerMenu } from "./scripts/menu.js";

const restaurants = data.restaurants;
const restaurantContainer = document.getElementsByClassName(
  "restaurant-container"
)[0];

for (const restaurant of restaurants) {
  const restaurantCard = document.createElement("restaurant-card");
  restaurantCard.restaurant = restaurant;
  restaurantContainer.appendChild(restaurantCard);
}

const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
hamburgerMenu.addEventListener("click", handleClickHamburgerMenu);

const copyrightYear = document.getElementById("copyright-year");
copyrightYear.textContent = String(new Date().getFullYear());
