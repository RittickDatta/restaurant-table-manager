import type { MenuAndOrdersStore } from '@/store/menu-and-orders-store';

// ORDER SELECTORS

export const getOrders = (store: MenuAndOrdersStore) => store.orders;

export const getOrderById = (store: MenuAndOrdersStore, id: number) =>
  store.orders.find((order) => order.id === id);

export const getOrdersByStatus = (store: MenuAndOrdersStore, status: string) => {
    const orderItems = store.orders.flatMap((order) => order.items);
    return orderItems.filter((item) => item.status === status);
}

export const getOrdersByTableId = (store: MenuAndOrdersStore, tableId: number) =>
  store.orders.filter((order) => order.tableId === tableId);

export const getTotalPriceByOrderId = (store: MenuAndOrdersStore, id: number) => {
  const order = store.orders.find((order) => order.id === id);
  if (!order) return null;
  return order.items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// MENU SELECTORS

export const getMenu = (store: MenuAndOrdersStore) => store.menu;

export const getMenuByCategory = (store: MenuAndOrdersStore, category: string) =>
  store.menu[category as keyof typeof store.menu];

export const getMenuItemById = (store: MenuAndOrdersStore, category: string, id: number) =>
  store.menu[category as keyof typeof store.menu].find((item) => item.id === id);

export const getMenuItemByName = (store: MenuAndOrdersStore, category: string, name: string) =>
  store.menu[category as keyof typeof store.menu].find((item) => item.name === name);

export const getMenuItemByDescriptionSearch = (store: MenuAndOrdersStore, category: string, searchTerm: string) =>
  store.menu[category as keyof typeof store.menu].filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

export const getMenuItemAvailability = (store: MenuAndOrdersStore, category: string, id: number) => {
  const item = store.menu[category as keyof typeof store.menu].find((item) => item.id === id);
  return item ? item.isAvailable : null;
}

export const getMenuItemPrice = (store: MenuAndOrdersStore, category: string, id: number) => {
  const item = store.menu[category as keyof typeof store.menu].find((item) => item.id === id);
  return item ? item.price : null;
}



 