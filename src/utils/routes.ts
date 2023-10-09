import { Favourite } from "../pages/favourite";
import { Home } from "../pages/home";

const removePreviousPage = () => {
  const mainElement = document.getElementsByTagName("main")[0] as HTMLElement;
  while (mainElement.childElementCount > 1) {
    mainElement.lastElementChild?.remove();
  }
};

const getPage = (url: string): (() => void) => {
  let page = () => {};

  switch (url) {
    case "/":
      page = Home;
      break;

    case "/favourite":
      page = Favourite;
      break;

    default: {
      location.replace(`${window.location.origin}#`);
      page = Home;
    }
  }

  return page;
};

export { getPage, removePreviousPage };
