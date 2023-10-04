import { focusTrap } from "./utilities";

const navigationMenu = document.getElementsByClassName(
  "navigation-menu"
)[0] as HTMLUListElement;
const navigationMenuItems = navigationMenu.getElementsByTagName("a");
const focusTrapContainer = document.getElementsByTagName(
  "nav"
)[0] as HTMLElement;

const focusableElements = [
  navigationMenu.previousElementSibling,
  ...navigationMenuItems,
] as HTMLElement[];

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
  for (let index = 0; index < navigationMenuItems.length; index++) {
    navigationMenuItems[index]?.removeEventListener(
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

const handleClickHamburgerMenu = (event: MouseEvent) => {
  event.stopPropagation();
  const hamburgerMenu = event.currentTarget as HTMLButtonElement;
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
    for (let index = 0; index < navigationMenuItems.length; index++) {
      navigationMenuItems[index]?.addEventListener(
        "click",
        handleClickNavigationMenuItem
      );
    }
  }
};

export { handleClickHamburgerMenu };
