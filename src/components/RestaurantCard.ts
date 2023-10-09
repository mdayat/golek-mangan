import "./RestaurantDetails";
import { IMAGE_ENDPOINT } from "../utils/config";
import type { Restaurant } from "../types/restaurant";

class RestaurantCard extends HTMLElement {
  _restaurant: Restaurant = {
    id: "",
    name: "",
    description: "",
    pictureId: "",
    city: "",
    address: "",
    categories: [],
    menus: { foods: [], drinks: [] },
    rating: 0,
    customerReviews: [],
  };

  set restaurant(restaurant: Restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.setAttribute("class", "restaurant-card");

    const restaurantImage = document.createElement("img");
    restaurantImage.setAttribute(
      "src",
      `${IMAGE_ENDPOINT}${this._restaurant.pictureId}`
    );
    restaurantImage.setAttribute("alt", "");
    restaurantImage.setAttribute("class", "restaurant-image");
    this.appendChild(restaurantImage);

    const divElement = document.createElement("div");
    this.appendChild(divElement);

    const restaurantName = document.createElement("h3");
    restaurantName.setAttribute("class", "restaurant-name");
    restaurantName.textContent = this._restaurant.name;
    divElement.appendChild(restaurantName);

    const restaurantDescription = document.createElement("h3");
    restaurantDescription.setAttribute("class", "restaurant-description");
    restaurantDescription.textContent = this._restaurant.description;
    divElement.appendChild(restaurantDescription);

    const paragraphElement = document.createElement("p");
    divElement.appendChild(paragraphElement);

    const restaurantCity = document.createElement("span");
    restaurantCity.textContent = this._restaurant.city;
    paragraphElement.appendChild(restaurantCity);

    const restaurantRatings = document.createElement("span");
    restaurantRatings.textContent = String(this._restaurant.rating);
    paragraphElement.appendChild(restaurantRatings);

    const anchorElement = document.createElement("a");
    anchorElement.setAttribute(
      "href",
      `#restaurants/${this._restaurant.id}/details`
    );
    anchorElement.setAttribute(
      "aria-label",
      `Open restaurant details of ${this._restaurant.name}`
    );
    anchorElement.textContent = "Details";
    this.appendChild(anchorElement);
  }
}

customElements.define("restaurant-card", RestaurantCard);
export type { RestaurantCard };
