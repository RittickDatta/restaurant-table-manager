import type { Order, OrderStatus } from "@/features/order/order.types";

export const getOrderById = (orders: Order[], id: number) =>
  orders.find((order) => order.id === id);

const getOrdersByStatus = (
  orderStatus: {
    [k: string]: OrderStatus;
  },
  status: OrderStatus,
) =>
  Object.fromEntries(
    Object.entries(orderStatus).filter(([key, value]) =>
      value === status ? [key, value] : null,
    ),
  );

export const getOrderByStatus = (orders: Order[], id: number) => {
  const orderItems = orders.find((order) => order.id === id)?.items;

  const orderStatus = Object.fromEntries(
    orderItems?.map((item) => [item.dishName, item.status]) ?? [],
  );

  const idle = getOrdersByStatus(orderStatus, 'idle');
  const inProgress = getOrdersByStatus(orderStatus, 'inProgress');
  const returned = getOrdersByStatus(orderStatus, 'returned');
  const complete = getOrdersByStatus(orderStatus, 'complete');

  return {
    orderStatus,
    idle,
    inProgress,
    returned,
    complete,
  };
};

export const getOrdersByTableId = (orders: Order[], tableId: number) =>
  orders.filter((order) => order.tableId === tableId);

export const getTotalPriceByOrderId = (orders: Order[], id: number) => {
  const order = orders.find((order) => order.id === id);
  if (!order) return null;
  return order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};