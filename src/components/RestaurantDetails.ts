import type { Restaurant } from "../types/restaurant";

class RestaurantDetails extends HTMLElement {
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

  render() {}
}

customElements.define("restaurant-details", RestaurantDetails);
export type { RestaurantDetails };
