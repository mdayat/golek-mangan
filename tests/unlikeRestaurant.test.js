import { describe, test, expect } from "vitest";
import {
  addFavoriteRestaurant,
  deleteFavoriteRestaurant,
  getFavoriteRestaurant,
} from "../src/utils/indexedDB";

describe("Unlike a restaurant", () => {
  test("should be able to unlike a restaurant", async () => {
    const { restaurantId } = await addFavoriteRestaurant({ id: 1 });
    await deleteFavoriteRestaurant(restaurantId);
    const favoriteRestaurant = await getFavoriteRestaurant(restaurantId);
    expect(favoriteRestaurant).toEqual([]);
  });
});
