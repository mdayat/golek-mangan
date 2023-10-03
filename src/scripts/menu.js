import { focusTrap } from "./utilities.js";

const menu = document.getElementsByClassName("nav-menu")[0];
const menuItems = menu.getElementsByTagName("a");

const openMenu = (menu) => {
  menu.classList.add("open-nav-menu");
};

const closeMenu = (menu) => {
  menu.classList.remove("open-nav-menu");
};

// Close menu when its item is clicked
const handleClickMenuItem = (event) => {
  event.stopPropagation();

  window.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", handleResizedNavMenu);
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].removeEventListener("click", handleClickMenuItem);
  }
  closeMenu(menu);
};

// Close menu when clicking outside of menu
const handleClickOutside = (event) => {
  event.stopPropagation();

  const navEl = document.getElementsByTagName("nav")[0];
  const clickedEl = event.target;
  const isClickedOutside = !navEl.contains(clickedEl);

  if (isClickedOutside) {
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", handleResizedNavMenu);
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].removeEventListener("click", handleClickMenuItem);
    }
    closeMenu(menu);
  }
};

// Close menu when viewport is >= 1024
const handleResizedNavMenu = () => {
  if (window.innerWidth < 1024) return;
  const isMenuOpened = menu.classList.value.includes("open-nav-menu");

  if (isMenuOpened) {
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", handleResizedNavMenu);
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].removeEventListener("click", handleClickMenuItem);
    }
    closeMenu(menu);
  }
};

const handleClickHamburgerMenu = (event) => {
  event.stopPropagation();
  const hamburgerMenu = event.currentTarget;
  const isMenuOpened = menu.classList.value.includes("open-nav-menu");

  if (isMenuOpened) {
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", handleResizedNavMenu);
    closeMenu(menu);
  } else {
    openMenu(menu);
    hamburgerMenu.focus();

    const focusTrapContainer = document.getElementsByTagName("nav")[0];
    const focusableEls = [event.currentTarget, ...menuItems];
    focusTrap(focusTrapContainer, focusableEls);

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResizedNavMenu);
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", handleClickMenuItem);
    }
  }
};

export { handleClickHamburgerMenu };
