import type { OrdersStore } from '../orders-store';

export const getOrders = (store: OrdersStore) => store.orders;

export const getOrderById = (id: number) => (store: OrdersStore) =>
  store.orders.find((order) => order.id === id);

export const getOrdersByStatus = (status: string) => (store: OrdersStore) => {
  const orderItems = store.orders.flatMap((order) => order.items);
  return orderItems.filter((item) => item.status === status);
};

export const getOrdersByTableId = (tableId: number) => (store: OrdersStore) =>
  store.orders.filter((order) => order.tableId === tableId);

export const getTotalPriceByOrderId = (id: number) => (store: OrdersStore) => {
  const order = store.orders.find((order) => order.id === id);
  if (!order) return null;
  return order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};
