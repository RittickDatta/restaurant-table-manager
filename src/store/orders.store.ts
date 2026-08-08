import type { Order } from '@/features/order/order.types';
import { create } from 'zustand';

export type OrdersStore = {
  orders: Order[];

  addOrder: (order: Order) => void;
  updateOrder: (id: number, order: Partial<Omit<Order, 'id'>>) => void;
  deleteOrder: (id: number) => void;
};

export const useOrdersStore = create<OrdersStore>((set) => ({
  orders: [],

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
