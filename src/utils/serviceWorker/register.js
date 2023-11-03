import { Workbox } from "workbox-window";

const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("./serviceWorker.js");
    wb.register();
  }
};

export { registerServiceWorker };
