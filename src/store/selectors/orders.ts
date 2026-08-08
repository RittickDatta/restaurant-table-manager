import type { MenuStore } from '@/store/menu-store';

export const getMenu = (store: MenuStore) => store.menu;

export const getMenuByCategory = (store: MenuStore, category: string) =>
  store.menu[category as keyof typeof store.menu];

export const getMenuItemById = (store: MenuStore, category: string, id: number) =>
  store.menu[category as keyof typeof store.menu].find((item) => item.id === id);

export const getMenuItemByName = (store: MenuStore, category: string, name: string) =>
  store.menu[category as keyof typeof store.menu].find((item) => item.name === name);

export const getMenuItemByDescriptionSearch = (store: MenuStore, category: string, searchTerm: string) =>
  store.menu[category as keyof typeof store.menu].filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

export const getMenuItemAvailability = (store: MenuStore, category: string, id: number) => {
  const item = store.menu[category as keyof typeof store.menu].find((item) => item.id === id);
  return item ? item.isAvailable : null;
}

export const getMenuItemPrice = (store: MenuStore, category: string, id: number) => {
  const item = store.menu[category as keyof typeof store.menu].find((item) => item.id === id);
  return item ? item.price : null;
}



 