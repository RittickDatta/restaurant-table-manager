type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
};

type FoodCategory =
  | 'starters'
  | 'salads'
  | 'soups'
  | 'mainCourses'
  | 'sideDishes'
  | 'sandwichesAndWraps'
  | 'pizzaAndFlatbreads'
  | 'pastaAndNoodles'
  | 'riceDishes'
  | 'seafoodDishes'
  | 'meatDishes'
  | 'vegetarianDishes'
  | 'veganDishes'
  | 'breakfastAndBrunch'
  | 'streetFood'
  | 'snackFoods'
  | 'desserts'
  | 'bakedGoods'
  | 'beverages';

type Menu = Record<FoodCategory, MenuItem[]>;

const foodCategories: FoodCategory[] = [
  'starters',
  'salads',
  'soups',
  'mainCourses',
  'sideDishes',
  'sandwichesAndWraps',
  'pizzaAndFlatbreads',
  'pastaAndNoodles',
  'riceDishes',
  'seafoodDishes',
  'meatDishes',
  'vegetarianDishes',
  'veganDishes',
  'breakfastAndBrunch',
  'streetFood',
  'snackFoods',
  'desserts',
  'bakedGoods',
  'beverages',
];

export type { Menu, FoodCategory, MenuItem };
export { foodCategories };
