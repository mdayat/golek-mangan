const Favourite = () => {
  const mainElement = document.getElementsByTagName("main")[0] as HTMLElement;
  const h1 = document.createElement("h1");
  h1.textContent = "Favourite Page";
  mainElement.appendChild(h1);
};

export { Favourite };
