import { focusTrap } from '../utils/focusTrap';

const openNavigationMenu = (navigationMenu) => {
  navigationMenu.classList.add('open-navigation-menu');
};

const closeNavigationMenu = (navigationMenu) => {
  navigationMenu.classList.remove('open-navigation-menu');
};

const navbarServices = (navElement) => {
  const navigationMenu = navElement.getElementsByClassName('navigation-menu')[0];
  const hamburgerMenu = navElement.getElementsByClassName('hamburger-menu')[0];

  const menuItems = navigationMenu.getElementsByTagName('a');
  const focusableElements = [hamburgerMenu, ...menuItems];
  const focusTrapContainer = navElement;

  const { addFocusTrap, removeFocusTrap } = focusTrap(focusTrapContainer, focusableElements);

  const pressNavigationMenuItem = (event) => {
    if (event.key === 'Enter') {
      event.stopPropagation();

      removeFocusTrap();
      closeNavigationMenu(navigationMenu);
    }
  };

  // Close menu when its item is clicked
  const clickNavigationMenuItem = (event) => {
    event.stopPropagation();

    removeFocusTrap();
    closeNavigationMenu(navigationMenu);
  };

  // Close menu when clicking outside of menu
  const clickOutside = (event) => {
    event.stopPropagation();

    const clickedElement = event.target;
    const isClickedOutside = !navElement.contains(clickedElement);

    if (isClickedOutside) {
      removeFocusTrap();
      closeNavigationMenu(navigationMenu);
    }
  };

  // Close menu when viewport is >= 1024
  const resizeWindow = () => {
    if (window.innerWidth < 1024) return;
    const isMenuOpened = navigationMenu.classList.value.includes('open-navigation-menu');

    if (isMenuOpened) {
      removeFocusTrap();
      closeNavigationMenu(navigationMenu);
    }
  };

  hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    const isMenuOpened = navigationMenu.classList.value.includes('open-navigation-menu');

    if (isMenuOpened) {
      removeFocusTrap();
      closeNavigationMenu(navigationMenu);
    } else {
      openNavigationMenu(navigationMenu);
      addFocusTrap();
      hamburgerMenu.focus();

      window.addEventListener('click', clickOutside);
      window.addEventListener('resize', resizeWindow);
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', clickNavigationMenuItem);
        menuItems[i].addEventListener('keydown', pressNavigationMenuItem);
      }
    }
  });
};

export { navbarServices };
