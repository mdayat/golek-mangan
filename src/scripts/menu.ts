import { focusTrap } from "./utilities";

const menu = document.getElementsByClassName("nav-menu")[0] as HTMLUListElement;
const menuItems = menu.getElementsByTagName("a");

const enableFocus = () => {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i]?.removeAttribute("tabindex");
  }
};

const disableFocus = () => {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i]?.setAttribute("tabindex", "-1");
  }
};

if (window.innerWidth < 1024) {
  disableFocus();
}

const openMenu = (menu: HTMLUListElement) => {
  menu.classList.add("open-nav-menu");
};

const closeMenu = (menu: HTMLUListElement) => {
  menu.classList.remove("open-nav-menu");
};

// Close menu when its item is clicked
const handleClickMenuItem = (event: Event) => {
  event.stopPropagation();

  disableFocus();
  window.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", handleResizedNavMenu);
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i]?.removeEventListener("click", handleClickMenuItem);
  }
  closeMenu(menu);
};

// Close menu when clicking outside of menu
const handleClickOutside = (event: Event) => {
  event.stopPropagation();

  const navEl = document.getElementsByTagName("nav")[0];
  const clickedEl = event.target as HTMLElement;
  const isClickedOutside = !navEl?.contains(clickedEl);

  if (isClickedOutside) {
    disableFocus();
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", handleResizedNavMenu);
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i]?.removeEventListener("click", handleClickMenuItem);
    }
    closeMenu(menu);
  }
};

// Close menu when viewport is >= 1024
const handleResizedNavMenu = () => {
  if (window.innerWidth < 1024) return;
  const isMenuOpened = menu.classList.value.includes("open-nav-menu");

  if (isMenuOpened) {
    disableFocus();
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", handleResizedNavMenu);
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i]?.removeEventListener("click", handleClickMenuItem);
    }
    closeMenu(menu);
  }
};

const handleClickHamburgerMenu = (event: Event) => {
  event.stopPropagation();
  const hamburgerMenu = event.currentTarget as HTMLButtonElement;
  const isMenuOpened = menu.classList.value.includes("open-nav-menu");

  if (isMenuOpened) {
    disableFocus();
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", handleResizedNavMenu);
    closeMenu(menu);
  } else {
    openMenu(menu);
    enableFocus();
    hamburgerMenu.focus();

    const focusTrapContainer = document.getElementsByTagName(
      "nav"
    )[0] as HTMLElement;
    const focusableEls = [event.currentTarget, ...menuItems] as HTMLElement[];
    focusTrap(focusTrapContainer, focusableEls);

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResizedNavMenu);
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i]?.addEventListener("click", handleClickMenuItem);
    }
  }
};

export { handleClickHamburgerMenu };
