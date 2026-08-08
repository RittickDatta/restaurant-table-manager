import type { OrdersStore } from '../orders.store';

export const getOrders = (store: OrdersStore) => store.orders;
