import { useOrdersStore } from '@/store/orders.store';
import { getOrders } from '@/store/selectors/orders.selectors';

export const useOrderData = () => {
  const orders = useOrdersStore(getOrders);

  return {
    orders,
  };
};
