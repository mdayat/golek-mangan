import "./styles/reset.css";
import "./styles/responsive.css";
import "./main.css";
import "./components/RestaurantCard";

import { handleClickHamburgerMenu } from "./scripts/menu";
import type { Restaurant } from "./types/restaurant";
import type { RestaurantCard } from "./components/RestaurantCard";

const restaurants: Restaurant[] = [];
const restaurantContainer = document.getElementsByClassName(
  "restaurants-container"
)[0] as HTMLElement;

for (const restaurant of restaurants) {
  const restaurantCard = document.createElement(
    "restaurant-card"
  ) as RestaurantCard;
  restaurantCard.restaurant = restaurant;
  restaurantContainer.appendChild(restaurantCard);
}

const hamburgerMenu = document.getElementsByClassName(
  "hamburger-menu"
)[0] as HTMLButtonElement;
hamburgerMenu.addEventListener("click", handleClickHamburgerMenu);

const copyrightYear = document.getElementById(
  "copyright-year"
) as HTMLSpanElement;
copyrightYear.textContent = String(new Date().getFullYear());
