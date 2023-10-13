import { IMAGE_ENDPOINT } from '../../utils/config';

class RestaurantCard extends HTMLElement {
  #restaurant = '';

  set restaurant(restaurant) {
    this.#restaurant = restaurant;
    this.render();
  }

  render() {
    this.setAttribute('class', 'restaurant-card');

    const restaurantImage = document.createElement('img');
    restaurantImage.setAttribute(
      'src',
      `${IMAGE_ENDPOINT}${this.#restaurant.pictureId}`,
    );
    restaurantImage.setAttribute('alt', this.#restaurant.name);
    restaurantImage.setAttribute('class', 'restaurant-image');
    this.appendChild(restaurantImage);

    const divElement = document.createElement('div');
    this.appendChild(divElement);

    const restaurantName = document.createElement('h3');
    restaurantName.setAttribute('class', 'restaurant-name');
    restaurantName.textContent = this.#restaurant.name;
    divElement.appendChild(restaurantName);

    const restaurantDescription = document.createElement('h3');
    restaurantDescription.setAttribute('class', 'restaurant-description');
    restaurantDescription.textContent = this.#restaurant.description;
    divElement.appendChild(restaurantDescription);

    const paragraphElement = document.createElement('p');
    divElement.appendChild(paragraphElement);

    const restaurantCity = document.createElement('span');
    restaurantCity.textContent = this.#restaurant.city;
    paragraphElement.appendChild(restaurantCity);

    const restaurantRatings = document.createElement('span');
    restaurantRatings.textContent = String(this.#restaurant.rating);
    paragraphElement.appendChild(restaurantRatings);

    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', `#restaurants/${this.#restaurant.id}`);
    anchorElement.setAttribute(
      'aria-label',
      `Open restaurant details of ${this.#restaurant.name}`,
    );
    anchorElement.textContent = 'Details';
    this.appendChild(anchorElement);
  }
}

customElements.define('restaurant-card', RestaurantCard);
