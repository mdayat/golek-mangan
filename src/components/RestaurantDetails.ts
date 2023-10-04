import {
  disableScroll,
  enableScroll,
  focusTrap,
  setToScrollAuto,
  setToScrollSmooth,
} from "../scripts/utilities";
import type { Restaurant } from "../types/restaurant";

const closeRestaurantDetails = (event: MouseEvent) => {
  event.preventDefault();
  const restaurantDetails = (event.target as HTMLButtonElement).parentElement
    ?.parentElement as RestaurantDetails;

  enableScroll();
  setToScrollSmooth();
  restaurantDetails._modalOpener?.focus({ preventScroll: true });
  window.scrollTo(0, restaurantDetails.scrollY);
  restaurantDetails.remove();
};

class RestaurantDetails extends HTMLElement {
  scrollY: number = 0;
  _modalOpener: HTMLButtonElement | null = null;
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

  set modalOpener(modalOpener: HTMLButtonElement) {
    this._modalOpener = modalOpener;
  }

  connectedCallback() {
    this.scrollY = Number(this.getAttribute("scrollY"));
    setToScrollAuto();
    disableScroll();

    const buttonClose = this.lastElementChild
      ?.lastElementChild as HTMLButtonElement;
    const { addFocusTrap } = focusTrap(this, [buttonClose]);

    addFocusTrap();
    buttonClose.addEventListener("click", closeRestaurantDetails);
  }

  disconnectedCallback() {
    const buttonClose = this.lastElementChild
      ?.lastElementChild as HTMLButtonElement;
    buttonClose.removeEventListener("click", closeRestaurantDetails);
  }

  render() {
    this.setAttribute("class", "restaurant-details-container");

    const articleElement = document.createElement("article");
    articleElement.setAttribute("class", "restaurant-details");
    this.appendChild(articleElement);

    const restaurantImage = document.createElement("img");
    restaurantImage.setAttribute("src", this._restaurant.pictureId);
    restaurantImage.setAttribute("alt", this._restaurant.name);
    restaurantImage.setAttribute("class", "restaurant-details-image");
    articleElement.appendChild(restaurantImage);

    const divElement = document.createElement("div");
    articleElement.appendChild(divElement);

    const paragraphElement = document.createElement("p");
    divElement.appendChild(paragraphElement);

    const restaurantCity = document.createElement("span");
    restaurantCity.textContent = this._restaurant.city;
    paragraphElement.appendChild(restaurantCity);

    const restaurantRatings = document.createElement("span");
    restaurantRatings.textContent = String(this._restaurant.rating);
    paragraphElement.appendChild(restaurantRatings);

    const restaurantName = document.createElement("h3");
    restaurantName.setAttribute("class", "restaurant-details-name");
    restaurantName.textContent = this._restaurant.name;
    divElement.appendChild(restaurantName);

    const restaurantDescription = document.createElement("h3");
    restaurantDescription.setAttribute(
      "class",
      "restaurant-details-description"
    );
    restaurantDescription.textContent = this._restaurant.description;
    divElement.appendChild(restaurantDescription);

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "button");
    buttonElement.setAttribute(
      "aria-label",
      `Close restaurant details of ${this._restaurant.name}`
    );
    buttonElement.textContent = "Close";
    articleElement.appendChild(buttonElement);
  }
}

customElements.define("restaurant-details", RestaurantDetails);
export type { RestaurantDetails };
