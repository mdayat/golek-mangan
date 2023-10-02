const openMenu = (menu: HTMLUListElement) => {
  menu.classList.add("open-nav-menu");
};

const closeMenu = (menu: HTMLUListElement) => {
  menu.classList.remove("open-nav-menu");
};

const handleClickMenuItem = (event: Event) => {
  event.stopPropagation();

  const menu = (event.target as HTMLAnchorElement).parentElement
    ?.parentElement as HTMLUListElement;
  closeMenu(menu);
  window.removeEventListener("click", handleClickOutside);
};

const handleClickOutside = (event: Event) => {
  event.stopPropagation();

  const navEl = document.getElementsByTagName("nav")[0];
  const clickedEl = event.target as HTMLElement;
  const isClickedOutside = !navEl?.contains(clickedEl);
  const menu = navEl?.lastElementChild as HTMLUListElement;

  if (isClickedOutside) {
    closeMenu(menu);
    window.removeEventListener("click", handleClickOutside);
  }
};

const handleClickMenu = (event: Event) => {
  event.stopPropagation();

  const menu = document.getElementsByClassName(
    "nav-menu"
  )[0] as HTMLUListElement;
  const menuItems = menu.children;
  const isMenuOpened = menu.classList.value.includes("open-nav-menu");

  if (isMenuOpened) {
    closeMenu(menu);
    window.removeEventListener("click", handleClickOutside);
  } else {
    openMenu(menu);
    window.addEventListener("click", handleClickOutside);
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = (menuItems[i] as HTMLLIElement)
        .firstElementChild as HTMLAnchorElement;
      menuItem.addEventListener("click", handleClickMenuItem);
    }
  }
};

window.addEventListener("resize", () => {
  if (window.innerWidth < 1024) return;

  const menu = document.getElementsByClassName(
    "nav-menu"
  )[0] as HTMLUListElement;

  const isMenuOpened = menu.classList.value.includes("open-nav-menu");
  if (isMenuOpened) {
    closeMenu(menu);
    window.removeEventListener("click", handleClickOutside);
  }
});

export { handleClickMenu };
