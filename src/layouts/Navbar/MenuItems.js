const MenuItems = () => {
  const menuItems = [];

  for (let index = 1; index <= 3; index++) {
    const menuItem = document.createElement('li');
    const menuItemAnchor = document.createElement('a');

    if (index === 1) {
      menuItemAnchor.setAttribute('href', '#');
      menuItemAnchor.textContent = 'Home';
      menuItem.appendChild(menuItemAnchor);
    } else if (index === 2) {
      menuItemAnchor.setAttribute('href', '#favourite');
      menuItemAnchor.textContent = 'Favourite';
      menuItem.appendChild(menuItemAnchor);
    } else {
      menuItemAnchor.setAttribute('href', 'https://github.com/mdayat');
      menuItemAnchor.setAttribute('target', '_blank');
      menuItemAnchor.setAttribute('rel', 'noopener');
      menuItemAnchor.setAttribute('rel', 'noreferrer');
      menuItemAnchor.textContent = 'About Us';
      menuItem.appendChild(menuItemAnchor);
    }

    menuItems.push(menuItem);
  }

  return menuItems;
};

export { MenuItems };
