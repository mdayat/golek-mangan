import { focusTrap } from "../utils/focusTrap";

const handleNavbarFunctionalities = (navbar: HTMLElement) => {
  const navigationMenu = navbar.getElementsByClassName(
    "navigation-menu"
  )[0] as HTMLUListElement;

  const hamburgerMenu = navbar.getElementsByClassName(
    "hamburger-menu"
  )[0] as HTMLButtonElement;

  const MenuItems = navigationMenu.getElementsByTagName("a");
  const focusableElements = [hamburgerMenu, ...MenuItems] as HTMLElement[];

  const focusTrapContainer = navbar;
  const { addFocusTrap, removeFocusTrap } = focusTrap(
    focusTrapContainer,
    focusableElements
  );

  const openNavigationMenu = (navigationMenu: HTMLUListElement) => {
    navigationMenu.classList.add("open-navigation-menu");
  };

  const closeNavigationMenu = (navigationMenu: HTMLUListElement) => {
    navigationMenu.classList.remove("open-navigation-menu");
  };

  // Remove all event listener associated with navigation menu
  const removeNavigationMenuEventsListener = () => {
    removeFocusTrap();
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", handleResizeWindow);
    for (let index = 0; index < MenuItems.length; index++) {
      MenuItems[index]?.removeEventListener(
        "click",
        handleClickNavigationMenuItem
      );
    }
  };

  // Close menu when its item is clicked
  const handleClickNavigationMenuItem = (event: MouseEvent) => {
    event.stopPropagation();

    removeNavigationMenuEventsListener();
    closeNavigationMenu(navigationMenu);
  };

  // Close menu when clicking outside of menu
  const handleClickOutside = (event: MouseEvent) => {
    event.stopPropagation();

    const navElement = document.getElementsByTagName("nav")[0];
    const clickedElement = event.target as HTMLElement;
    const isClickedOutside = !navElement?.contains(clickedElement);

    if (isClickedOutside) {
      removeNavigationMenuEventsListener();
      closeNavigationMenu(navigationMenu);
    }
  };

  // Close menu when viewport is >= 1024
  const handleResizeWindow = () => {
    if (window.innerWidth < 1024) return;
    const isMenuOpened = navigationMenu.classList.value.includes(
      "open-navigation-menu"
    );

    if (isMenuOpened) {
      removeNavigationMenuEventsListener();
      closeNavigationMenu(navigationMenu);
    }
  };

  hamburgerMenu.addEventListener("click", (event: MouseEvent) => {
    event.stopPropagation();
    const isMenuOpened = navigationMenu.classList.value.includes(
      "open-navigation-menu"
    );

    if (isMenuOpened) {
      removeNavigationMenuEventsListener();
      closeNavigationMenu(navigationMenu);
    } else {
      openNavigationMenu(navigationMenu);
      hamburgerMenu.focus();
      addFocusTrap();

      window.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", handleResizeWindow);
      for (let index = 0; index < MenuItems.length; index++) {
        MenuItems[index]?.addEventListener(
          "click",
          handleClickNavigationMenuItem
        );
      }
    }
  });
};

const createMenuItems = (): HTMLLIElement[] => {
  const MenuItems: HTMLLIElement[] = [];

  for (let index = 1; index <= 3; index++) {
    const menuItem = document.createElement("li");
    const menuItemAnchor = document.createElement("a");

    switch (index) {
      case 1: {
        menuItemAnchor.setAttribute("href", "#");
        menuItemAnchor.textContent = "Home";
        menuItem.appendChild(menuItemAnchor);
        break;
      }

      case 2: {
        menuItemAnchor.setAttribute("href", "#favourite");
        menuItemAnchor.textContent = "Favourite";
        menuItem.appendChild(menuItemAnchor);
        break;
      }

      case 3: {
        menuItemAnchor.setAttribute("href", "https://github.com/mdayat");
        menuItemAnchor.setAttribute("target", "_blank");
        menuItemAnchor.setAttribute("rel", "noopener");
        menuItemAnchor.setAttribute("rel", "noreferrer");
        menuItemAnchor.textContent = "About Us";
        menuItem.appendChild(menuItemAnchor);
        break;
      }
    }

    MenuItems.push(menuItem);
  }

  return MenuItems;
};

const Navbar = (): HTMLElement => {
  const navElement = document.createElement("nav");
  const golekManganLogo = document.createElement("img");
  golekManganLogo.setAttribute("src", "./logo.png");
  golekManganLogo.setAttribute("alt", "Golek Mangan Logo");
  golekManganLogo.setAttribute("class", "logo");
  navElement.appendChild(golekManganLogo);

  const hamburgerMenu = document.createElement("button");
  hamburgerMenu.setAttribute("type", "button");
  hamburgerMenu.setAttribute("aria-label", "Hamburger Menu");
  hamburgerMenu.setAttribute("class", "hamburger-menu");
  navElement.appendChild(hamburgerMenu);

  const svgNamespace = "http://www.w3.org/2000/svg";
  const hamburgerMenuSvg = document.createElementNS(svgNamespace, "svg");
  hamburgerMenuSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  hamburgerMenuSvg.setAttribute("viewBox", "0 0 448 512");
  hamburgerMenu.appendChild(hamburgerMenuSvg);

  const hamburgerMenuSvgPath = document.createElementNS(svgNamespace, "path");
  hamburgerMenuSvgPath.setAttribute(
    "d",
    "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
  );
  hamburgerMenuSvg.appendChild(hamburgerMenuSvgPath);

  const navigationMenu = document.createElement("ul");
  navigationMenu.setAttribute("class", "navigation-menu");
  navElement.appendChild(navigationMenu);

  const MenuItems = createMenuItems();
  for (let index = 0; index < MenuItems.length; index++) {
    navigationMenu.appendChild(MenuItems[index] as HTMLLIElement);
  }

  handleNavbarFunctionalities(navElement);
  return navElement;
};

export { Navbar };
