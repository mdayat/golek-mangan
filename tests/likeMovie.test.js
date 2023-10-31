import { describe, test, expect } from "vitest";
import {
  addFavoriteRestaurant,
  getFavoriteRestaurant,
} from "../src/utils/indexedDB";

describe("Liking a movie", () => {
  test("should be able to like the movie", () => {
    addFavoriteRestaurant({ id: 1 }).then(({ restaurantId }) => {
      getFavoriteRestaurant(restaurantId).then((favoritedRestaurant) => {
        expect(favoritedRestaurant.id).toEqual(1);
      });
    });
  });
});
