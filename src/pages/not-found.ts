import { PageNotFound } from "../components/PageNotFound";

const NotFound = () => {
  const titleElement = document.getElementsByTagName(
    "title"
  )[0] as HTMLTitleElement;
  titleElement.textContent = "Page Not Found";

  const mainContent = document.getElementsByTagName("main")[0] as HTMLElement;
  const notFound = PageNotFound();
  mainContent.appendChild(notFound);
};

export { NotFound };
