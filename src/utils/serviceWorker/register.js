const registerServiceWorker = () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  navigator.serviceWorker.register('./serviceWorker.js').then();
};

export { registerServiceWorker };
