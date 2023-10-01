import "./styles/reset.css";
import "./main.css";

import { handleClickMenu } from "./scripts/menu";

const hamburgerMenu = document.getElementsByClassName(
  "hamburger-menu"
)[0] as HTMLButtonElement;
hamburgerMenu.addEventListener("click", handleClickMenu);
