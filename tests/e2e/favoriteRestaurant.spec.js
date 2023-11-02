// @ts-check
import { test, expect } from "@playwright/test";

test("Like a restaurant, then unlike that restaurant", async ({ page }) => {
  await page.goto("./#");

  // Click details button to show the restaurant details page
  await page.getByRole("link", { name: "Details" }).first().click();

  // Expect restaurant details page to have a button with the name of "Add to Favorite"
  await expect(
    page.getByRole("button", { name: "Add to Favorite" }),
  ).toBeVisible();

  // Add the selected restaurant details to indexedDB
  await page.getByRole("button", { name: "Add to Favorite" }).click();

  // Click navigation link to show the favorite restaurants page
  await page.getByRole("link", { name: "Favorite" }).click();

  // Expect favorite restaurants page,
  // to have a link button, with the name of "Details"
  await expect(page.getByRole("link", { name: "Details" })).toBeVisible();

  // Click details button to show the favorite restaurant details page
  await page.getByRole("link", { name: "Details" }).click();

  // Expect favorite restaurant details page,
  // to have a button with the name of "Remove from Favorite"
  await expect(
    page.getByRole("button", { name: "Remove from Favorite" }),
  ).toBeVisible();

  // Remove the selected favorite restaurant details from indexedDB
  await page.getByRole("button", { name: "Remove from Favorite" }).click();

  // Click navigation link to show the favorite restaurants page
  await page.getByRole("link", { name: "Favorite" }).click();

  // Expect favorite restaurants page,
  // to not have a link button, with the name of "Details"
  await expect(page.getByRole("link", { name: "Details" })).not.toBeVisible();
});
