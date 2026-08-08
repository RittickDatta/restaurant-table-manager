import type { OrdersStore } from "../orders-store";

export const getOrders = (store: OrdersStore) => store.orders;

export const getOrderById = (store: OrdersStore, id: number) =>
  store.orders.find((order) => order.id === id);

export const getOrdersByStatus = (store: OrdersStore, status: string) => {
    const orderItems = store.orders.flatMap((order) => order.items);
    return orderItems.filter((item) => item.status === status);
}

export const getOrdersByTableId = (store: OrdersStore, tableId: number) =>
  store.orders.filter((order) => order.tableId === tableId);

export const getTotalPriceByOrderId = (store: OrdersStore, id: number) => {
  const order = store.orders.find((order) => order.id === id);
  if (!order) return null;
  return order.items.reduce((total, item) => total + item.price * item.quantity, 0);
}