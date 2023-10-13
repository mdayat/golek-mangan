import { Details } from '../pages/restaurant-details';
import { Favourite } from '../pages/favourite';
import { Home } from '../pages/home';
import { NotFound } from '../pages/not-found';

const removePreviousPage = () => {
  const mainElement = document.getElementsByTagName('main')[0];
  while (mainElement.childElementCount > 1) {
    mainElement.lastElementChild?.remove();
  }
};

const getPage = (url) => {
  let page = () => {};

  switch (url) {
    case '/':
      page = Home;
      break;

    case '/favourite':
      page = Favourite;
      break;

    case '/restaurants/:id':
      page = Details;
      break;

    default: {
      page = NotFound;
    }
  }

  return page;
};

export { getPage, removePreviousPage };