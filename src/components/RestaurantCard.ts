import "./RestaurantDetails";
import type { Restaurant } from "../types/restaurant";
import type { RestaurantDetails } from "./RestaurantDetails";

const openRestaurantDetails = (event: MouseEvent) => {
  event.preventDefault();

  const restaurantCard = (event.target as HTMLButtonElement)
    .parentElement as RestaurantCard;
  const restaurantDetails = document.createElement(
    "restaurant-details"
  ) as RestaurantDetails;

  restaurantDetails.setAttribute("scrollY", String(window.scrollY));
  restaurantDetails.restaurant = restaurantCard._restaurant;
  restaurantDetails.modalOpener = event.target as HTMLButtonElement;
  restaurantCard.appendChild(restaurantDetails);
};

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

  connectedCallback() {
    const buttonDetails = this.lastElementChild as HTMLButtonElement;
    buttonDetails.addEventListener("click", openRestaurantDetails);
  }

  disconnectedCallback() {
    const buttonDetails = this.lastElementChild as HTMLButtonElement;
    buttonDetails.removeEventListener("click", openRestaurantDetails);
  }

  render() {
    this.setAttribute("class", "restaurant-card");

    const restaurantImage = document.createElement("img");
    restaurantImage.setAttribute("src", this._restaurant.pictureId);
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

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "button");
    buttonElement.setAttribute(
      "aria-label",
      `Open restaurant details of ${this._restaurant.name}`
    );
    buttonElement.textContent = "Details";
    this.appendChild(buttonElement);
  }
}

customElements.define("restaurant-card", RestaurantCard);
export type { RestaurantCard };
