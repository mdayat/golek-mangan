import { describe, test, expect } from "vitest";
import {
  addFavoriteRestaurant,
  deleteFavoriteRestaurant,
  getFavoriteRestaurant,
} from "../src/utils/indexedDB";

describe("Unlike a movie", () => {
  test("should be able to unlike the movie", () => {
    addFavoriteRestaurant({ id: 1 }).then(({ restaurantId }) => {
      deleteFavoriteRestaurant(restaurantId).then(() => {
        getFavoriteRestaurant(restaurantId).then((favoritedRestaurant) => {
          expect(favoritedRestaurant).toEqual([]);
        });
      });
    });
  });
});
