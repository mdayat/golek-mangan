import { focusTrap } from "./utilities";

const menu = document.getElementsByClassName(
  "navigation-menu"
)[0] as HTMLUListElement;
const menuItems = menu.getElementsByTagName("a");

const focusTrapContainer = document.getElementsByTagName(
  "nav"
)[0] as HTMLElement;

const focusableEls = [
  menu.previousElementSibling,
  ...menuItems,
] as HTMLElement[];

const { addFocusTrap, removeFocusTrap } = focusTrap(
  focusTrapContainer,
  focusableEls
);

const openMenu = (menu: HTMLUListElement) => {
  menu.classList.add("open-navigation-menu");
};

const closeMenu = (menu: HTMLUListElement) => {
  menu.classList.remove("open-navigation-menu");
};

const removeMenuEventListener = () => {
  removeFocusTrap();
  window.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", handleResizedNavMenu);
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i]?.removeEventListener("click", handleClickMenuItem);
  }
};

// Close menu when its item is clicked
const handleClickMenuItem = (event: Event) => {
  event.stopPropagation();

  removeMenuEventListener();
  closeMenu(menu);
};

// Close menu when clicking outside of menu
const handleClickOutside = (event: Event) => {
  event.stopPropagation();

  const navEl = document.getElementsByTagName("nav")[0];
  const clickedEl = event.target as HTMLElement;
  const isClickedOutside = !navEl?.contains(clickedEl);

  if (isClickedOutside) {
    removeMenuEventListener();
    closeMenu(menu);
  }
};

// Close menu when viewport is >= 1024
const handleResizedNavMenu = () => {
  if (window.innerWidth < 1024) return;
  const isMenuOpened = menu.classList.value.includes("open-navigation-menu");

  if (isMenuOpened) {
    removeMenuEventListener();
    closeMenu(menu);
  }
};

const handleClickHamburgerMenu = (event: Event) => {
  event.stopPropagation();
  const hamburgerMenu = event.currentTarget as HTMLButtonElement;
  const isMenuOpened = menu.classList.value.includes("open-navigation-menu");

  if (isMenuOpened) {
    removeMenuEventListener();
    closeMenu(menu);
  } else {
    openMenu(menu);
    hamburgerMenu.focus();
    addFocusTrap();

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResizedNavMenu);
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i]?.addEventListener("click", handleClickMenuItem);
    }
  }
};

export { handleClickHamburgerMenu };
