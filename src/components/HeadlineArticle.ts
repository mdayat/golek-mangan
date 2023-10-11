const HeadlineArticle = (): HTMLElement => {
  const headline = document.createElement("article");
  headline.setAttribute("class", "headline");

  const divElement = document.createElement("div");
  headline.appendChild(divElement);

  const headlineTitle = document.createElement("h1");
  headlineTitle.setAttribute("class", "headline-title");
  headlineTitle.textContent = "Golek Mangan";
  divElement.appendChild(headlineTitle);

  const headlineDescription = document.createElement("p");
  headlineDescription.setAttribute("class", "headline-description");
  headlineDescription.textContent = `Golek Mangan is Javanese which means "Foraging for Food". As the name suggests, Golek Mangan is an application for finding "food" or restaurants in Indonesia. These restaurants are selected and assessed by our expert teams so they can be ensured that they meet the standards.`;
  divElement.appendChild(headlineDescription);

  const headlineImage = document.createElement("img");
  headlineImage.setAttribute("src", "./hangout-image.jpg");
  headlineImage.setAttribute("alt", "Hangout with friends");
  headlineImage.setAttribute("class", "headline-image");
  headline.appendChild(headlineImage);

  return headline;
};

export { HeadlineArticle };
