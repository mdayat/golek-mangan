import { PageNotFound } from '../components/PageNotFound';

const NotFound = () => {
  const titleElement = document.getElementsByTagName('title')[0];
  titleElement.textContent = 'Page Not Found';

  const mainContent = document.getElementsByTagName('main')[0];
  const notFound = PageNotFound();
  mainContent.appendChild(notFound);
};

export { NotFound };
