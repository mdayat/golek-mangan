const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js');
  }
};

export { registerServiceWorker };
