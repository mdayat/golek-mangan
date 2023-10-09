import { Navbar } from "./Navbar";

const Header = (): HTMLElement => {
  const headerElement = document.createElement("header");
  const navbar = Navbar();
  headerElement.appendChild(navbar);

  const hero = document.createElement("div");
  hero.setAttribute("class", "hero");
  headerElement.appendChild(hero);

  const heroImage = document.createElement("img");
  heroImage.setAttribute("src", "./hero-image.jpg");
  heroImage.setAttribute("alt", "");
  hero.appendChild(heroImage);

  const heroText = document.createElement("h2");
  heroText.textContent = "Find restaurants blazingly fast with ";
  hero.appendChild(heroText);

  const spanEl = document.createElement("span");
  spanEl.textContent = "Golek Mangan";
  heroText.appendChild(spanEl);
  return headerElement;
};

export { Header };
