const focusTrap = (focusTrapContainer, focusableElements) => {
  const firstFocusableEl = focusableElements[0];
  const lastFocusableEl = focusableElements[focusableElements.length - 1];

  const handleFocusTrap = (event) => {
    const isTabPressed = event.key === 'Tab';
    if (!isTabPressed) return;

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl?.focus();
        event.preventDefault();
      }
    } else if (document.activeElement === lastFocusableEl) {
      firstFocusableEl?.focus();
      event.preventDefault();
    }
  };

  return {
    addFocusTrap: () => {
      firstFocusableEl?.focus();
      focusTrapContainer.addEventListener('keydown', handleFocusTrap);
    },

    removeFocusTrap: () => {
      focusTrapContainer.removeEventListener('keydown', handleFocusTrap);
    },
  };
};

export { focusTrap };
