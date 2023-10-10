import { IMAGE_ENDPOINT } from "../utils/config";
import type {
  CustomerReviews,
  Restaurant,
  RestaurantMenus,
} from "../types/restaurant";

const getNumberOfMonth = (monthName: string): string => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let numberOfMonth = String(months.indexOf(monthName) + 1);

  // Prefix "numberOfMonth" with "0" if its number is below 10
  if (Number(numberOfMonth) < 10) {
    numberOfMonth = `0${numberOfMonth}`;
    return numberOfMonth;
  }

  return numberOfMonth;
};

// Reformat the date from "10 Juli 2023" to "2023-07-10"
const reformatTheDate = (date: string): string => {
  const reversedDate = date.split(" ").reverse();
  reversedDate[1] = getNumberOfMonth(reversedDate[1] as string);
  return reversedDate.join("-");
};

const createCustomerReviews = (reviews: CustomerReviews[]): HTMLElement[] => {
  const customerReviews: HTMLElement[] = [];

  for (let index = 0; index < reviews.length; index++) {
    const review = reviews[index] as CustomerReviews;

    const articleElement = document.createElement("article");
    const divElement = document.createElement("div");
    articleElement.appendChild(divElement);

    const reviewerName = document.createElement("h3");
    reviewerName.setAttribute("class", "reviewer-name");
    reviewerName.textContent = review.name;
    divElement.appendChild(reviewerName);

    const reformattedDate = reformatTheDate(review.date);
    const dateOfReview = document.createElement("date");
    dateOfReview.setAttribute("datetime", reformattedDate);
    dateOfReview.setAttribute("class", "date-of-review");
    dateOfReview.textContent = review.date;
    divElement.appendChild(dateOfReview);

    const reviewContent = document.createElement("p");
    reviewContent.setAttribute("class", "review-content");
    reviewContent.textContent = review.review;
    articleElement.appendChild(reviewContent);

    customerReviews.push(articleElement);
  }

  return customerReviews;
};

const createRestaurantDetailList = (
  address: string,
  menus: RestaurantMenus
): HTMLLIElement[] => {
  const detailList: HTMLLIElement[] = [];

  const firstLiElement = document.createElement("li");
  firstLiElement.setAttribute("class", "restaurant-address");
  firstLiElement.textContent = "Address: ";
  detailList.push(firstLiElement);

  const restaurantAddress = document.createElement("span");
  restaurantAddress.textContent = address;
  firstLiElement.appendChild(restaurantAddress);

  const secondLiElement = document.createElement("li");
  secondLiElement.setAttribute("class", "restaurant-foods");
  secondLiElement.textContent = "Foods: ";
  detailList.push(secondLiElement);

  const restaurantFoods = document.createElement("span");
  restaurantFoods.textContent = menus.foods.map(({ name }) => name).join(", ");
  secondLiElement.appendChild(restaurantFoods);

  const thirdLiElement = document.createElement("li");
  thirdLiElement.setAttribute("class", "restaurant-drinks");
  thirdLiElement.textContent = "Drinks: ";
  detailList.push(thirdLiElement);

  const restaurantDrinks = document.createElement("span");
  restaurantDrinks.textContent = menus.drinks
    .map(({ name }) => name)
    .join(", ");
  thirdLiElement.appendChild(restaurantDrinks);

  return detailList;
};

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

  render() {
    const restaurantHeadline = document.createElement("article");
    restaurantHeadline.setAttribute("class", "restaurant-headline");
    this.appendChild(restaurantHeadline);

    const divElement = document.createElement("div");
    restaurantHeadline.appendChild(divElement);

    const restaurantHeadlineName = document.createElement("h1");
    restaurantHeadlineName.setAttribute("class", "restaurant-headline-title");
    restaurantHeadlineName.textContent = this._restaurant.name;
    divElement.appendChild(restaurantHeadlineName);

    const restaurantHeadlineDescription = document.createElement("p");
    restaurantHeadlineDescription.setAttribute(
      "class",
      "restaurant-headline-description"
    );
    restaurantHeadlineDescription.textContent = this._restaurant.description;
    divElement.appendChild(restaurantHeadlineDescription);

    const restaurantHeadlineImage = document.createElement("img");
    restaurantHeadlineImage.setAttribute(
      "src",
      `${IMAGE_ENDPOINT}${this._restaurant.pictureId}`
    );
    restaurantHeadlineImage.setAttribute("alt", this._restaurant.name);
    restaurantHeadlineImage.setAttribute("class", "restaurant-headline-image");
    restaurantHeadline.appendChild(restaurantHeadlineImage);

    const detailAndReviewContainer = document.createElement("div");
    detailAndReviewContainer.setAttribute("class", "detail-review-container");
    this.appendChild(detailAndReviewContainer);

    const restaurantDetails = document.createElement("article");
    detailAndReviewContainer.appendChild(restaurantDetails);

    const restaurantDetailsTitle = document.createElement("h2");
    restaurantDetailsTitle.setAttribute("class", "restaurant-details-title");
    restaurantDetailsTitle.textContent = "Details";
    restaurantDetails.appendChild(restaurantDetailsTitle);

    const combinedAddress = `${this._restaurant.address}, ${this._restaurant.city}`;
    const ulElement = document.createElement("ul");
    const restaurantDetailList = createRestaurantDetailList(
      combinedAddress,
      this._restaurant.menus
    );
    restaurantDetails.appendChild(ulElement);

    for (let index = 0; index < restaurantDetailList.length; index++) {
      ulElement.appendChild(restaurantDetailList[index] as HTMLLIElement);
    }

    const restaurantReviews = document.createElement("section");
    restaurantReviews.setAttribute("class", "restaurant-reviews");
    detailAndReviewContainer.appendChild(restaurantReviews);

    const restaurantReviewsTitle = document.createElement("h2");
    restaurantReviewsTitle.setAttribute("class", "restaurant-reviews-title");
    restaurantReviewsTitle.textContent = "Reviews";
    restaurantReviews.appendChild(restaurantReviewsTitle);

    const customerReviews = createCustomerReviews(
      this._restaurant.customerReviews
    );

    for (let index = 0; index < customerReviews.length; index++) {
      restaurantReviews.appendChild(customerReviews[index] as HTMLElement);
    }
  }
}

customElements.define("restaurant-details", RestaurantDetails);
export type { RestaurantDetails };
