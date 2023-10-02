import "./components/RestaurantCard.ts";
import "./styles/reset.css";
import "./main.css";

import data from "./public/data.json";
import { handleClickMenu } from "./scripts/menu";
import type { RestaurantData, Restaurant } from "./types/restaurant";
import type { RestaurantCard } from "./components/RestaurantCard.ts";

const restaurants: Restaurant[] = (data as RestaurantData).restaurants;
const restaurantContainer = document.getElementsByClassName(
  "restaurant-container"
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
hamburgerMenu.addEventListener("click", handleClickMenu);

const copyrightYear = document.getElementById(
  "copyright-year"
) as HTMLSpanElement;
copyrightYear.textContent = String(new Date().getFullYear());
