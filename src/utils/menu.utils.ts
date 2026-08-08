import type { FoodCategory, Menu, MenuItem } from "@/features/menu/menu.types";

export const getMenuByCategory = (menu: Menu, category: FoodCategory) =>
  menu[category];

export const getMenuItemById = (menu: Menu, category: string, id: number) =>
  (menu[category as FoodCategory] as MenuItem[]).find((item) => item.id === id);

export const getMenuItemByName = (menu: Menu, category: string, name: string) =>
  menu[category as FoodCategory].find((item) => item.name === name);

export const getMenuItemByDescriptionSearch = (
  menu: Menu,
  category: string,
  searchTerm: string,
) =>
  menu[category as FoodCategory].filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

export const getMenuItemAvailability = (
  menu: Menu,
  category: string,
  id: number,
) => {
  const item = menu[category as FoodCategory].find((item) => item.id === id);
  return item ? item.isAvailable : null;
};

export const getMenuItemPrice = (menu: Menu, category: string, id: number) => {
  const item = menu[category as FoodCategory].find((item) => item.id === id);
  return item ? item.price : null;
};