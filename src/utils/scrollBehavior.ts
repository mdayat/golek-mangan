const setToScrollAuto = () => {
  const htmlEl = document.getElementsByTagName("html")[0] as HTMLElement;
  htmlEl.setAttribute("class", "scroll-auto");
};

const setToScrollSmooth = () => {
  const htmlEl = document.getElementsByTagName("html")[0] as HTMLElement;
  htmlEl.setAttribute("class", "scroll-smooth");
};

const enableScroll = () => {
  window.onscroll = () => {};
};

const disableScroll = () => {
  window.scrollTo(0, 0);
  window.onscroll = () => {
    window.scrollTo(0, 0);
  };
};

export { setToScrollAuto, setToScrollSmooth, enableScroll, disableScroll };
