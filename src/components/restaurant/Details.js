const RestaurantDetails = (address, menu) => {
  const detailsContainer = document.createElement("article");

  const detailsTitle = document.createElement("h2");
  detailsTitle.setAttribute("class", "restaurant-details-title");
  detailsTitle.textContent = "Details";
  detailsContainer.appendChild(detailsTitle);

  const detailList = document.createElement("ul");
  detailsContainer.appendChild(detailList);

  const firstListElement = document.createElement("li");
  firstListElement.setAttribute("class", "restaurant-address");
  firstListElement.textContent = "Address: ";
  detailList.appendChild(firstListElement);

  const restaurantAddress = document.createElement("span");
  restaurantAddress.textContent = address;
  firstListElement.appendChild(restaurantAddress);

  const secondListElement = document.createElement("li");
  secondListElement.setAttribute("class", "restaurant-foods");
  secondListElement.textContent = "Foods: ";
  detailList.appendChild(secondListElement);

  const restaurantFoods = document.createElement("span");
  restaurantFoods.textContent = menu.foods
    .map(({ name }) => {
      return name;
    })
    .join(", ");
  secondListElement.appendChild(restaurantFoods);

  const thirdListElement = document.createElement("li");
  thirdListElement.setAttribute("class", "restaurant-drinks");
  thirdListElement.textContent = "Drinks: ";
  detailList.appendChild(thirdListElement);

  const restaurantDrinks = document.createElement("span");
  restaurantDrinks.textContent = menu.drinks
    .map(({ name }) => {
      return name;
    })
    .join(", ");
  thirdListElement.appendChild(restaurantDrinks);

  return detailsContainer;
};

export { RestaurantDetails };
