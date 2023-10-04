interface FocusTrapReturnTypes {
  addFocusTrap: () => void;
  removeFocusTrap: () => void;
}

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
  focusableElements: HTMLElement[]
): FocusTrapReturnTypes => {
  const firstFocusableEl = focusableElements[0];
  const lastFocusableEl = focusableElements[focusableElements.length - 1];

  const handleFocusTrap = (event: KeyboardEvent) => {
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
  };

  return {
    addFocusTrap: () => {
      firstFocusableEl?.focus();
      focusTrapContainer.addEventListener("keydown", handleFocusTrap);
    },

    removeFocusTrap: () => {
      focusTrapContainer.removeEventListener("keydown", handleFocusTrap);
    },
  };
};

export {
  setToScrollAuto,
  setToScrollSmooth,
  enableScroll,
  disableScroll,
  focusTrap,
};
