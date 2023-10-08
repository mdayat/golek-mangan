interface CustomerReviews {
  name: string;
  review: string;
  date: string;
}

interface RestaurantMenus {
  foods: { name: string }[];
  drinks: { name: string }[];
}

interface Restaurant {
  id: string;
  name: string;
  description: string;
  pictureId: string;
  city: string;
  address: string;
  rating: number;
  categories: { name: string }[];
  menus: RestaurantMenus;
  customerReviews: CustomerReviews[];
}

export type { Restaurant };
