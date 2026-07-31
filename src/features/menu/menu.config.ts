import type { Menu } from "./menu.types";

export const menu: Menu = {
  starters: [
    {
      id: 1,
      name: 'Bruschetta',
      description: 'Toasted bread with tomatoes, basil, and garlic.',
      price: 7.99,
      isAvailable: true,
    },
    {
      id: 2,
      name: 'Spring Rolls',
      description: 'Crispy rolls filled with vegetables.',
      price: 6.99,
      isAvailable: true,
    },
  ],

  salads: [
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine lettuce with Caesar dressing and croutons.',
      price: 9.99,
      isAvailable: true,
    },
    {
      id: 4,
      name: 'Greek Salad',
      description: 'Fresh vegetables with feta cheese and olives.',
      price: 10.99,
      isAvailable: true,
    },
  ],

  soups: [
    {
      id: 5,
      name: 'Tomato Soup',
      description: 'Creamy tomato soup served hot.',
      price: 5.99,
      isAvailable: true,
    },
    {
      id: 6,
      name: 'Ramen',
      description: 'Japanese noodle soup with rich broth.',
      price: 13.99,
      isAvailable: true,
    },
    {
      id: 7,
      name: 'Clam Chowder',
      description: 'Creamy chowder with clams and potatoes.',
      price: 11.99,
      isAvailable: true,
    },
  ],

  mainCourses: [
    {
      id: 8,
      name: 'Grilled Steak',
      description: 'Juicy grilled beef steak.',
      price: 24.99,
      isAvailable: true,
    },
    {
      id: 9,
      name: 'Chicken Curry',
      description: 'Tender chicken in aromatic curry sauce.',
      price: 18.99,
      isAvailable: true,
    },
    {
      id: 10,
      name: 'Spaghetti Bolognese',
      description: 'Classic spaghetti with meat sauce.',
      price: 16.99,
      isAvailable: true,
    },
    {
      id: 11,
      name: 'Grilled Salmon',
      description: 'Fresh salmon grilled to perfection.',
      price: 22.99,
      isAvailable: true,
    },
  ],

  sideDishes: [
    {
      id: 12,
      name: 'Steamed Rice',
      description: 'Fluffy steamed white rice.',
      price: 3.99,
      isAvailable: true,
    },
    {
      id: 13,
      name: 'Mashed Potatoes',
      description: 'Creamy mashed potatoes.',
      price: 4.99,
      isAvailable: true,
    },
    {
      id: 14,
      name: 'Roasted Vegetables',
      description: 'Seasonal vegetables roasted with herbs.',
      price: 5.99,
      isAvailable: true,
    },
  ],

  sandwichesAndWraps: [
    {
      id: 15,
      name: 'Classic Burger',
      description: 'Beef burger with cheese and lettuce.',
      price: 13.99,
      isAvailable: true,
    },
    {
      id: 16,
      name: 'Chicken Panini',
      description: 'Grilled panini with chicken and cheese.',
      price: 11.99,
      isAvailable: true,
    },
    {
      id: 17,
      name: 'Beef Burrito',
      description: 'Flour tortilla filled with beef and rice.',
      price: 12.99,
      isAvailable: true,
    },
  ],

  pizzaAndFlatbreads: [
    {
      id: 18,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato, mozzarella, and basil.',
      price: 14.99,
      isAvailable: true,
    },
    {
      id: 19,
      name: 'Naan Pizza',
      description: 'Flatbread pizza with mixed toppings.',
      price: 12.99,
      isAvailable: true,
    },
  ],

  pastaAndNoodles: [
    {
      id: 20,
      name: 'Spaghetti Carbonara',
      description: 'Spaghetti with bacon, egg, and parmesan.',
      price: 15.99,
      isAvailable: true,
    },
    {
      id: 21,
      name: 'Pad Thai',
      description: 'Thai stir-fried rice noodles.',
      price: 15.99,
      isAvailable: true,
    },
    {
      id: 22,
      name: 'Udon Noodles',
      description: 'Japanese thick noodles in savory broth.',
      price: 14.99,
      isAvailable: true,
    },
  ],

  riceDishes: [
    {
      id: 23,
      name: 'Fried Rice',
      description: 'Rice stir-fried with vegetables and egg.',
      price: 11.99,
      isAvailable: true,
    },
    {
      id: 24,
      name: 'Risotto',
      description: 'Creamy Italian rice with parmesan.',
      price: 16.99,
      isAvailable: true,
    },
    {
      id: 25,
      name: 'Paella',
      description: 'Spanish rice dish with seafood.',
      price: 20.99,
      isAvailable: true,
    },
  ],

  seafoodDishes: [
    {
      id: 26,
      name: 'Grilled Salmon',
      description: 'Fresh salmon fillet grilled with herbs.',
      price: 22.99,
      isAvailable: true,
    },
    {
      id: 27,
      name: 'Shrimp Scampi',
      description: 'Shrimp sautéed in garlic butter sauce.',
      price: 21.99,
      isAvailable: true,
    },
  ],

  meatDishes: [
    {
      id: 28,
      name: 'Roast Chicken',
      description: 'Herb-roasted whole chicken.',
      price: 18.99,
      isAvailable: true,
    },
    {
      id: 29,
      name: 'Lamb Chops',
      description: 'Grilled lamb chops with rosemary.',
      price: 26.99,
      isAvailable: true,
    },
    {
      id: 30,
      name: 'Beef Stew',
      description: 'Slow-cooked beef with vegetables.',
      price: 19.99,
      isAvailable: true,
    },
  ],

  vegetarianDishes: [
    {
      id: 31,
      name: 'Vegetable Lasagna',
      description: 'Lasagna layered with seasonal vegetables.',
      price: 15.99,
      isAvailable: true,
    },
    {
      id: 32,
      name: 'Falafel Plate',
      description: 'Crispy falafel served with salad and pita.',
      price: 13.99,
      isAvailable: true,
    },
  ],

  veganDishes: [
    {
      id: 33,
      name: 'Lentil Curry',
      description: 'Spiced lentil curry served with rice.',
      price: 14.99,
      isAvailable: true,
    },
    {
      id: 34,
      name: 'Tofu Stir Fry',
      description: 'Tofu and vegetables stir-fried in soy sauce.',
      price: 14.99,
      isAvailable: true,
    },
  ],

  breakfastAndBrunch: [
    {
      id: 35,
      name: 'Pancakes',
      description: 'Fluffy pancakes served with maple syrup.',
      price: 9.99,
      isAvailable: true,
    },
    {
      id: 36,
      name: 'Cheese Omelet',
      description: 'Three-egg omelet with cheese.',
      price: 10.99,
      isAvailable: true,
    },
    {
      id: 37,
      name: 'Avocado Toast',
      description: 'Toasted bread topped with smashed avocado.',
      price: 11.99,
      isAvailable: true,
    },
  ],

  streetFood: [
    {
      id: 38,
      name: 'Tacos',
      description: 'Soft tortillas filled with seasoned meat.',
      price: 10.99,
      isAvailable: true,
    },
    {
      id: 39,
      name: 'Chicken Kebab',
      description: 'Grilled chicken served in pita.',
      price: 12.99,
      isAvailable: true,
    },
    {
      id: 40,
      name: 'Hot Dog',
      description: 'Classic hot dog with mustard and ketchup.',
      price: 7.99,
      isAvailable: true,
    },
  ],

  snackFoods: [
    {
      id: 41,
      name: 'Nachos',
      description: 'Corn chips with cheese and salsa.',
      price: 8.99,
      isAvailable: true,
    },
    {
      id: 42,
      name: 'Popcorn',
      description: 'Freshly popped buttered popcorn.',
      price: 4.99,
      isAvailable: true,
    },
    {
      id: 43,
      name: 'French Fries',
      description: 'Golden crispy fries.',
      price: 5.99,
      isAvailable: true,
    },
  ],

  desserts: [
    {
      id: 44,
      name: 'Cheesecake',
      description: 'Creamy baked cheesecake.',
      price: 7.99,
      isAvailable: true,
    },
    {
      id: 45,
      name: 'Chocolate Cake',
      description: 'Rich chocolate layer cake.',
      price: 6.99,
      isAvailable: true,
    },
    {
      id: 46,
      name: 'Vanilla Ice Cream',
      description: 'Classic vanilla ice cream.',
      price: 5.99,
      isAvailable: true,
    },
  ],

  bakedGoods: [
    {
      id: 47,
      name: 'Sourdough Bread',
      description: 'Freshly baked artisan sourdough.',
      price: 4.99,
      isAvailable: true,
    },
    {
      id: 48,
      name: 'Blueberry Muffin',
      description: 'Soft muffin with blueberries.',
      price: 3.99,
      isAvailable: true,
    },
    {
      id: 49,
      name: 'Butter Croissant',
      description: 'Flaky French pastry.',
      price: 3.49,
      isAvailable: true,
    },
  ],

  beverages: [
    {
      id: 50,
      name: 'Coffee',
      description: 'Freshly brewed coffee.',
      price: 3.49,
      isAvailable: true,
    },
    {
      id: 51,
      name: 'Tea',
      description: 'Selection of premium teas.',
      price: 2.99,
      isAvailable: true,
    },
    {
      id: 52,
      name: 'Fruit Smoothie',
      description: 'Fresh fruit blended with yogurt.',
      price: 5.99,
      isAvailable: true,
    },
  ],
};