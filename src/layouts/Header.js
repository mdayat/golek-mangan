import { Navbar } from "./Navbar";

const Header = () => {
  const headerElement = document.createElement("header");
  const navbar = Navbar();
  headerElement.appendChild(navbar);

  const hero = document.createElement("div");
  hero.setAttribute("class", "hero");
  headerElement.appendChild(hero);

  const pictureEl = document.createElement("picture");
  hero.appendChild(pictureEl);

  const heroSmall = document.createElement("source");
  heroSmall.setAttribute("media", "(max-width: 767px)");
  heroSmall.setAttribute("srcset", "./hero-small.jpg");
  heroSmall.setAttribute("type", "image/jpeg");
  pictureEl.appendChild(heroSmall);

  const heroMedium = document.createElement("source");
  heroMedium.setAttribute("media", "(min-width: 768px)");
  heroMedium.setAttribute("srcset", "./hero-medium.jpg");
  heroMedium.setAttribute("type", "image/jpeg");
  pictureEl.appendChild(heroMedium);

  const imageFallback = document.createElement("img");
  imageFallback.setAttribute("src", "./hero-medium.jpg");
  imageFallback.setAttribute("alt", "");
  pictureEl.appendChild(imageFallback);

  const heroText = document.createElement("h2");
  heroText.textContent = "Find restaurants blazingly fast with ";
  hero.appendChild(heroText);

  const spanEl = document.createElement("span");
  spanEl.textContent = "Golek Mangan";
  heroText.appendChild(spanEl);
  return headerElement;
};

export { Header };
