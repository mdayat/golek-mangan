import "./styles/reset.css";
import "./styles/animations.css";
import "./main.css";
import "./styles/responsive.css";
import "./components/RestaurantCard";
import "./layouts/Footer";

import { Layouts } from "./layouts/index";
import { getPage, removePreviousPage } from "./utils/routes";
import { parseActiveUrl } from "./utils/urlParser";

window.addEventListener("hashchange", () => {
  const url = parseActiveUrl(true) as string;
  const page = getPage(url);

  removePreviousPage();
  page();
});

window.addEventListener("load", () => {
  const url = parseActiveUrl(true) as string;
  const page = getPage(url);

  Layouts();
  page();
});
