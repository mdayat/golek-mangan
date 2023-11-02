import { describe, test, expect } from "vitest";
import {
  addFavoriteRestaurant,
  getFavoriteRestaurant,
} from "../src/utils/indexedDB";

describe("Like a restaurant", () => {
  test("should be able to like a restaurant", async () => {
    const { restaurantId } = await addFavoriteRestaurant({ id: 1 });
    const { restaurant } = await getFavoriteRestaurant(restaurantId);
    expect(restaurant.id).toEqual(1);
  });
});
