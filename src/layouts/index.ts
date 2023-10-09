import { Footer } from "./Footer";
import { Header } from "./Header";

const Layouts = () => {
  const header = Header();
  const footer = Footer();

  const skipToContent = document.createElement("a");
  skipToContent.setAttribute("href", "#main-content");
  skipToContent.setAttribute("class", "skip-to-content");
  skipToContent.textContent = "Skip To Content";

  const mainElement = document.createElement("main");
  const skipToContentDestination = document.createElement("a");
  skipToContentDestination.setAttribute("id", "main-content");
  skipToContentDestination.setAttribute("href", "#");
  skipToContentDestination.setAttribute("tabindex", "-1");
  skipToContentDestination.setAttribute("aria-label", "Main content area");
  mainElement.appendChild(skipToContentDestination);

  document.body.appendChild(skipToContent);
  document.body.appendChild(header);
  document.body.appendChild(mainElement);
  document.body.appendChild(footer);
};

export { Layouts };
