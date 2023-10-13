import { focusTrap } from '../../utils/focusTrap';

const openNavigationMenu = (navigationMenu) => {
  navigationMenu.classList.add('open-navigation-menu');
};

const closeNavigationMenu = (navigationMenu) => {
  navigationMenu.classList.remove('open-navigation-menu');
};

const navbarServices = (navbar) => {
  const navigationMenu = navbar.getElementsByClassName('navigation-menu')[0];
  const hamburgerMenu = navbar.getElementsByClassName('hamburger-menu')[0];

  const menuItems = navigationMenu.getElementsByTagName('a');
  const focusableElements = [hamburgerMenu, ...menuItems];
  const focusTrapContainer = navbar;

  const { addFocusTrap, removeFocusTrap } = focusTrap(
    focusTrapContainer,
    focusableElements
  );

  // Remove all event listener associated with navigation menu
  const removeNavigationMenuEventsListener = () => {
    removeFocusTrap();
    window.removeEventListener('click', handleClickOutside);
    window.removeEventListener('resize', handleResizeWindow);
    for (let index = 0; index < menuItems.length; index++) {
      menuItems[index]?.removeEventListener(
        'click',
        handleClickNavigationMenuItem
      );
    }
  };

  // Close menu when its item is clicked
  const handleClickNavigationMenuItem = (event) => {
    event.stopPropagation();

    removeNavigationMenuEventsListener();
    closeNavigationMenu(navigationMenu);
  };

  // Close menu when clicking outside of menu
  const handleClickOutside = (event) => {
    event.stopPropagation();

    const navElement = document.getElementsByTagName('nav')[0];
    const clickedElement = event.target;
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
      'open-navigation-menu'
    );

    if (isMenuOpened) {
      removeNavigationMenuEventsListener();
      closeNavigationMenu(navigationMenu);
    }
  };

  hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    const isMenuOpened = navigationMenu.classList.value.includes(
      'open-navigation-menu'
    );

    if (isMenuOpened) {
      removeNavigationMenuEventsListener();
      closeNavigationMenu(navigationMenu);
    } else {
      openNavigationMenu(navigationMenu);
      hamburgerMenu.focus();
      addFocusTrap();

      window.addEventListener('click', handleClickOutside);
      window.addEventListener('resize', handleResizeWindow);
      for (let index = 0; index < menuItems.length; index++) {
        menuItems[index]?.addEventListener(
          'click',
          handleClickNavigationMenuItem
        );
      }
    }
  });
};

export { navbarServices };
