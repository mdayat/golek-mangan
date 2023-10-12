self.addEventListener("install", () => {
  console.log("Installing service worker...");
  // Caching App Shell resources
});

self.addEventListener("activate", () => {
  console.log("Activating service worker");
  // Delete old changes
});

// Turning off eslint rules because TypeScript hasn't supported types for service worker yet
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
self.addEventListener("fetch", (event: any) => {
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
  console.log(event.request);
});
