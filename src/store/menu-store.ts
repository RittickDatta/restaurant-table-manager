import { menu } from '@/features/menu/menu.config';
import type { FoodCategory, Menu, MenuItem } from '@/features/menu/menu.types';
import { create } from 'zustand';

export type MenuStore = {
  menu: Menu;

  addDishByCategory: (category: FoodCategory, item: MenuItem) => void;
  updateDishByCategory: (
    category: FoodCategory,
    id: number,
    item: Partial<Omit<MenuItem, 'id'>>,
  ) => void;
  deleteDish: (category: FoodCategory, id: number) => void;
};

export const useMenuStore = create<MenuStore>()((set) => ({
  menu: menu,

  addDishByCategory: (category, item) =>
    set((state) => {
      const currentCategoryItems = state.menu[category];
      const updatedCategoryItems = [...currentCategoryItems, item];
      const updatedMenu = { ...state.menu };
      updatedMenu[category] = updatedCategoryItems;
      return {
        menu: updatedMenu,
      };
    }),

  updateDishByCategory: (category, id, item) =>
    set((state) => {
      const currentCategoryItems = state.menu[category];
      const updatedCategoryItems = currentCategoryItems.map((oldItem) =>
        oldItem.id !== id ? oldItem : { ...oldItem, ...item },
      );
      const updatedMenu = { ...state.menu };
      updatedMenu[category] = updatedCategoryItems;
      return {
        menu: updatedMenu,
      };
    }),

  deleteDish: (category, id) =>
    set((state) => {
      const currentCategoryItems = state.menu[category];
      const updatedCategoryItems = currentCategoryItems
        .map((item) => (item.id !== id ? item : null))
        .filter((x) => x !== null);
      const updatedMenu = { ...state.menu };
      updatedMenu[category] = updatedCategoryItems;
      return {
        menu: updatedMenu,
      };
    }),
}));
