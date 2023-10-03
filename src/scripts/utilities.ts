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

const focusTrap = (
  focusTrapContainer: HTMLElement,
  focusableEls: HTMLElement[]
) => {
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  firstFocusableEl?.focus();

  focusTrapContainer.addEventListener("keydown", (event: KeyboardEvent) => {
    const isTabPressed = event.key === "Tab";
    if (!isTabPressed) return;

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl?.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl?.focus();
        event.preventDefault();
      }
    }
  });
};

export {
  setToScrollAuto,
  setToScrollSmooth,
  enableScroll,
  disableScroll,
  focusTrap,
};
