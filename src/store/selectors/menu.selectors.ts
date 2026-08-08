import type { MenuStore } from '@/store/menu.store';

export const getMenu = (store: MenuStore) => store.menu;
