const setToScrollAuto = () => {
  const htmlEl = document.getElementsByTagName("html")[0] as HTMLElement;
  htmlEl.setAttribute("class", "scroll-auto");
};

const setToScrollSmooth = () => {
  const htmlEl = document.getElementsByTagName("html")[0] as HTMLElement;
  htmlEl.setAttribute("class", "scroll-smooth");
};

export { setToScrollAuto, setToScrollSmooth };
