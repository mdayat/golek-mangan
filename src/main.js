import "./styles/reset.css";
import "./styles/animations.css";
import "./main.css";
import "./styles/responsive.css";

import { Layouts } from "./layouts/index";
import { getPage, removePreviousPage } from "./utils/routes";
import { parseActiveUrl } from "./utils/urlParser";
import { registerServiceWorker } from "./utils/serviceWorker/register";

window.addEventListener("hashchange", () => {
  const url = parseActiveUrl(true);

  if (url !== "/main-content") {
    const page = getPage(url);
    removePreviousPage();
    page();
  }
});

window.addEventListener("load", () => {
  const url = parseActiveUrl(true);
  const page = getPage(url);

  Layouts();
  page();

  registerServiceWorker();
});
