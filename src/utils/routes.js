import { Details } from '../pages/restaurant-details';
import { Favorite } from '../pages/favorite';
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

    case '/favorite':
      page = Favorite;
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
