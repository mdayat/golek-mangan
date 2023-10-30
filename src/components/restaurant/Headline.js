import { IMAGE_ENDPOINT } from "../../utils/config";

const RestaurantHeadline = (name, description, pictureId) => {
  const headlineContainer = document.createElement("article");
  headlineContainer.setAttribute("class", "restaurant-headline");

  const divElement = document.createElement("div");
  headlineContainer.appendChild(divElement);

  const headlineTitle = document.createElement("h1");
  headlineTitle.setAttribute("class", "restaurant-headline-title");
  headlineTitle.textContent = name;
  divElement.appendChild(headlineTitle);

  const headlineDescription = document.createElement("p");
  headlineDescription.setAttribute("class", "restaurant-headline-description");
  headlineDescription.textContent = description;
  divElement.appendChild(headlineDescription);

  const headlineImage = document.createElement("img");
  headlineImage.setAttribute("src", `${IMAGE_ENDPOINT}${pictureId}`);
  headlineImage.setAttribute("alt", name);
  headlineImage.setAttribute("class", "restaurant-headline-image");
  headlineContainer.appendChild(headlineImage);

  return headlineContainer;
};

export { RestaurantHeadline };
