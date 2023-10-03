import {
  disableScroll,
  enableScroll,
  focusTrap,
  setToScrollAuto,
  setToScrollSmooth,
} from "../scripts/utilities.js";

const handleCloseRestaurantDetails = (event) => {
  event.preventDefault();
  const restaurantDetails = event.target.parentElement.parentElement;

  setToScrollSmooth();
  enableScroll();
  window.scrollTo(0, restaurantDetails.scrollY);
  restaurantDetails._modalOpener.focus();
  restaurantDetails.remove();
};

class RestaurantDetails extends HTMLElement {
  scrollY = 0;
  _modalOpener = null;
  _restaurant = {
    id: "",
    name: "",
    description: "",
    pictureId: "",
    city: "",
    rating: 0,
  };

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  set modalOpener(modalOpener) {
    this._modalOpener = modalOpener;
  }

  connectedCallback() {
    this.scrollY = Number(this.getAttribute("scrollY"));
    setToScrollAuto();
    disableScroll();

    const btnClose = this.lastElementChild.lastElementChild;
    btnClose.addEventListener("click", handleCloseRestaurantDetails);

    focusTrap(this, [btnClose]);
  }

  disconnectedCallback() {
    const btnClose = this.lastElementChild.lastElementChild;
    btnClose.addEventListener("click", handleCloseRestaurantDetails);
  }

  render() {
    this.setAttribute("class", "restaurant-details-container");

    const articleEl = document.createElement("article");
    articleEl.setAttribute("class", "restaurant-details");
    this.appendChild(articleEl);

    const restaurantImage = document.createElement("img");
    restaurantImage.setAttribute("src", this._restaurant.pictureId);
    restaurantImage.setAttribute("alt", "");
    restaurantImage.setAttribute("class", "restaurant-details-image");
    articleEl.appendChild(restaurantImage);

    const divEl = document.createElement("div");
    articleEl.appendChild(divEl);

    const pEl = document.createElement("p");
    divEl.appendChild(pEl);

    const restaurantCity = document.createElement("span");
    restaurantCity.textContent = this._restaurant.city;
    pEl.appendChild(restaurantCity);

    const restaurantRatings = document.createElement("span");
    restaurantRatings.textContent = String(this._restaurant.rating);
    pEl.appendChild(restaurantRatings);

    const restaurantName = document.createElement("h3");
    restaurantName.setAttribute("class", "restaurant-details-name");
    restaurantName.textContent = this._restaurant.name;
    divEl.appendChild(restaurantName);

    const restaurantDesc = document.createElement("h3");
    restaurantDesc.setAttribute("class", "restaurant-details-desc");
    restaurantDesc.textContent = this._restaurant.description;
    divEl.appendChild(restaurantDesc);

    const btnEl = document.createElement("button");
    btnEl.setAttribute("type", "button");
    btnEl.setAttribute(
      "aria-label",
      `Close details of ${this._restaurant.name} Restaurant`
    );
    btnEl.textContent = "Close";
    articleEl.appendChild(btnEl);
  }
}

customElements.define("restaurant-details", RestaurantDetails);
