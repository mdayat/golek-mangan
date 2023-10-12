const registerServiceWorker = () => {
  if (!("serviceWorker" in navigator)) {
    console.log("The browser doesn't support Service Worker.");
    return;
  }

  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then((registration) => {
      console.log(registration);
    })
    .catch((error) => {
      console.log("Failed to register service worker", error);
    });
};

export { registerServiceWorker };
