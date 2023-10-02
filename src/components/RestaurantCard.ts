import type { Restaurant } from "../types/restaurant";

const handleShowRestaurantDetails = (event: Event) => {
  event.preventDefault();
};

class RestaurantCard extends HTMLElement {
  _restaurant: Restaurant = {
    id: "",
    name: "",
    description: "",
    pictureId: "",
    city: "",
    rating: 0,
  };

  set restaurant(restaurant: Restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  connectedCallback() {
    const btnDetails = this.lastElementChild
      ?.lastElementChild as HTMLButtonElement;
    btnDetails.addEventListener("click", handleShowRestaurantDetails);
  }

  disconnectedCallback() {
    const btnDetails = this.lastElementChild
      ?.lastElementChild as HTMLButtonElement;
    btnDetails.removeEventListener("click", handleShowRestaurantDetails);
  }

  render() {
    this.setAttribute("class", "restaurant");

    const restaurantImage = document.createElement("img");
    restaurantImage.setAttribute("src", this._restaurant.pictureId);
    restaurantImage.setAttribute("alt", "");
    restaurantImage.setAttribute("class", "restaurant-image");
    this.appendChild(restaurantImage);

    const divEl = document.createElement("div");
    this.appendChild(divEl);

    const restaurantName = document.createElement("h3");
    restaurantName.setAttribute("class", "restaurant-name");
    restaurantName.textContent = this._restaurant.name;
    divEl.appendChild(restaurantName);

    const restaurantDesc = document.createElement("h3");
    restaurantDesc.setAttribute("class", "restaurant-desc");
    restaurantDesc.textContent = this._restaurant.description;
    divEl.appendChild(restaurantDesc);

    const pEl = document.createElement("p");
    divEl.appendChild(pEl);

    const restaurantCity = document.createElement("span");
    restaurantCity.textContent = this._restaurant.city;
    pEl.appendChild(restaurantCity);

    const restaurantRatings = document.createElement("span");
    restaurantRatings.textContent = String(this._restaurant.rating);
    pEl.appendChild(restaurantRatings);

    const btnEl = document.createElement("button");
    btnEl.setAttribute("type", "button");
    btnEl.textContent = "Details";
    divEl.appendChild(btnEl);
  }
}

customElements.define("restaurant-card", RestaurantCard);
export type { RestaurantCard };
