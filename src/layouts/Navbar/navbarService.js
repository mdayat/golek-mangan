import { focusTrap } from '../../utils/focusTrap';

const openNavMenu = (navMenu) => {
  navMenu.classList.add('open-nav-menu');
};

const closeNavMenu = (navMenu) => {
  navMenu.classList.remove('open-nav-menu');
};

const navbarServices = (navElement) => {
  const navMenu = navElement.getElementsByClassName('nav-menu')[0];
  const hamburgerMenu = navElement.getElementsByClassName('hamburger-menu')[0];

  const menuItems = navMenu.getElementsByTagName('a');
  const focusableElements = [hamburgerMenu, ...menuItems];
  const focusTrapContainer = navElement;

  const { addFocusTrap, removeFocusTrap } = focusTrap(
    focusTrapContainer,
    focusableElements,
  );

  const pressNavMenuItem = (event) => {
    if (event.key === 'Enter') {
      event.stopPropagation();

      removeFocusTrap();
      closeNavMenu(navMenu);
    }
  };

  // Close menu when its item is clicked
  const clickNavMenuItem = (event) => {
    event.stopPropagation();

    removeFocusTrap();
    closeNavMenu(navMenu);
  };

  // Close menu when clicking outside of menu
  const clickOutside = (event) => {
    event.stopPropagation();

    const clickedElement = event.target;
    const isClickedOutside = !navElement.contains(clickedElement);

    if (isClickedOutside) {
      removeFocusTrap();
      closeNavMenu(navMenu);
    }
  };

  // Close menu when viewport is >= 1024
  const resizeWindow = () => {
    if (window.innerWidth < 1024) return;
    const isMenuOpened = navMenu.classList.value.includes('open-nav-menu');

    if (isMenuOpened) {
      removeFocusTrap();
      closeNavMenu(navMenu);
    }
  };

  hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    const isMenuOpened = navMenu.classList.value.includes('open-nav-menu');

    if (isMenuOpened) {
      removeFocusTrap();
      closeNavMenu(navMenu);
    } else {
      openNavMenu(navMenu);
      addFocusTrap();
      hamburgerMenu.focus();

      window.addEventListener('click', clickOutside);
      window.addEventListener('resize', resizeWindow);
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', clickNavMenuItem);
        menuItems[i].addEventListener('keydown', pressNavMenuItem);
      }
    }
  });
};

export { navbarServices };
