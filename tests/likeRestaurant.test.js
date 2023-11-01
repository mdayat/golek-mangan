import { describe, test, expect } from "vitest";
import {
  addFavoriteRestaurant,
  getFavoriteRestaurant,
} from "../src/utils/indexedDB";

describe("Liking a restaurant", () => {
  test("should be able to like a restaurant", async () => {
    const { restaurantId } = await addFavoriteRestaurant({ id: 1 });
    const favoriteRestaurant = await getFavoriteRestaurant(restaurantId);
    expect(favoriteRestaurant.id).toEqual(1);
  });
});
