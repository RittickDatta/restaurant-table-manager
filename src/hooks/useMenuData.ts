import { useMenuStore } from '@/store/menu.store';
import { getMenu } from '@/store/selectors/menu.selectors';

export const useMenuData = () => {
  const menu = useMenuStore(getMenu);

  return {
    menu,
  };
};
