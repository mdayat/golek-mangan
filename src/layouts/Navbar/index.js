import { MenuItems } from "./MenuItems";
import { navbarServices } from "./navbarService";
import { SVG_NAMESPACE } from "../../utils/config";

const Navbar = () => {
  const navElement = document.createElement("nav");
  const golekManganLogo = document.createElement("img");
  golekManganLogo.setAttribute("src", "./icons/icon-512x512.png");
  golekManganLogo.setAttribute("alt", "Golek Mangan Logo");
  golekManganLogo.setAttribute("class", "logo");
  navElement.appendChild(golekManganLogo);

  const hamburgerMenu = document.createElement("button");
  hamburgerMenu.setAttribute("type", "button");
  hamburgerMenu.setAttribute("aria-label", "Hamburger Menu");
  hamburgerMenu.setAttribute("class", "hamburger-menu");
  navElement.appendChild(hamburgerMenu);

  const hamburgerMenuSvg = document.createElementNS(SVG_NAMESPACE, "svg");
  hamburgerMenuSvg.setAttribute("xmlns", SVG_NAMESPACE);
  hamburgerMenuSvg.setAttribute("viewBox", "0 0 448 512");
  hamburgerMenu.appendChild(hamburgerMenuSvg);

  const hamburgerMenuSvgPath = document.createElementNS(SVG_NAMESPACE, "path");
  hamburgerMenuSvgPath.setAttribute(
    "d",
    "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
  );
  hamburgerMenuSvg.appendChild(hamburgerMenuSvgPath);

  const navMenu = document.createElement("ul");
  navMenu.setAttribute("class", "nav-menu");
  navElement.appendChild(navMenu);

  const menuItems = MenuItems();
  menuItems.forEach((menuItem) => {
    navMenu.appendChild(menuItem);
  });

  navbarServices(navElement);
  return navElement;
};

export { Navbar };
