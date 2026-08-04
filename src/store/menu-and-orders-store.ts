import { menu } from '@/features/menu/menu.config';
import type { FoodCategory, Menu, MenuItem } from '@/features/menu/menu.types';
import type { Order } from '@/features/order/order.types';
import { create } from 'zustand';

export type MenuAndOrdersStore = {
  menu: Menu;
  orders: Order[];

  //   getMenu: () => Menu;
  addDishByCategory: (category: FoodCategory, item: MenuItem) => void;
  updateDishByCategory: (
    category: FoodCategory,
    id: number,
    item: Partial<Omit<MenuItem, 'id'>>,
  ) => void;
  deleteDish: (category: FoodCategory, id: number) => void;

  addOrder: (order: Order) => void;
  updateOrder: (id: number, order: Partial<Omit<Order, 'id'>>) => void;
  deleteOrder: (id: number) => void;
};

export const useMenuAndOrdersStore = create<MenuAndOrdersStore>()((set) => ({
  menu: menu,
  orders: [],

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

  addOrder: (order) =>
    set((state) => {
      const updatedOrders = [...state.orders, order];
      return {
        orders: updatedOrders,
      };
    }),

  updateOrder: (id, order) =>
    set((state) => {
      const updatedOrders = state.orders.map((oldOrder) =>
        oldOrder.id !== id ? oldOrder : { ...oldOrder, ...order },
      );
      return {
        orders: updatedOrders,
      };
    }),

  deleteOrder: (id) =>
    set((state) => {
      const updatedOrders = state.orders
        .map((order) => (order.id !== id ? order : null))
        .filter((x) => x !== null);
      return {
        orders: updatedOrders,
      };
    }),
}));
