import type { MenuStore } from '@/store/menu-store';

export const getMenu = (store: MenuStore) => store.menu;

export const getMenuByCategory = (category: string) => (store: MenuStore) =>
  store.menu[category as keyof typeof store.menu];

export const getMenuItemById = (category: string, id: number) => (store: MenuStore) =>
  store.menu[category as keyof typeof store.menu].find((item) => item.id === id);

export const getMenuItemByName = (category: string, name: string) => (store: MenuStore) =>
  store.menu[category as keyof typeof store.menu].find((item) => item.name === name);

export const getMenuItemByDescriptionSearch = (category: string, searchTerm: string) => (store: MenuStore) =>
  store.menu[category as keyof typeof store.menu].filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

export const getMenuItemAvailability = (category: string, id: number) => (store: MenuStore) => {
  const item = store.menu[category as keyof typeof store.menu].find((item) => item.id === id);
  return item ? item.isAvailable : null;
}

export const getMenuItemPrice = (category: string, id: number) => (store: MenuStore) => {
  const item = store.menu[category as keyof typeof store.menu].find((item) => item.id === id);
  return item ? item.price : null;
}



 