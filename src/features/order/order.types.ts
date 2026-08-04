import type { FoodCategory } from '../menu/menu.types';

type OrderStatus = 'idle' | 'inProgress' | 'returned' | 'complete';
type TableandItemId = `Table-${number}:Item-${number}`;
type OrderItem = {
  id: TableandItemId;
  dishCategory: FoodCategory;
  dishName: string;

  quantity: number;
  price: number;

  specialInstructions: string;
  status: OrderStatus;

  startedAt: Date;
  completedAt: Date;
};

interface Order {
  id: number;

  tableId: number;
  waiterId: number;

  items: OrderItem[];

  completedOrders: OrderItem[];
  pendingOrders: OrderItem[];
  cancelledOrder: OrderItem[];

  timeOfOrder: Date;
  timeOfCompletion: Date;
}

export type { Order };
