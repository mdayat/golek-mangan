const getNumberOfMonth = (monthName) => {
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
const reformatTheDate = (date) => {
  const reversedDate = date.split(" ").reverse();
  reversedDate[1] = getNumberOfMonth(reversedDate[1]);
  return reversedDate.join("-");
};

const RestaurantReviews = (reviews) => {
  const reviewsContainer = document.createElement("section");
  reviewsContainer.setAttribute("class", "reviews-container");

  const reviewsTitle = document.createElement("h2");
  reviewsTitle.setAttribute("class", "reviews-title");
  reviewsTitle.textContent = "Reviews";
  reviewsContainer.appendChild(reviewsTitle);

  for (let index = 0; index < reviews.length; index++) {
    const review = reviews[index];

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

    reviewsContainer.appendChild(articleElement);
  }

  return reviewsContainer;
};

export { RestaurantReviews };
