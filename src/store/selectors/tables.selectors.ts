import type { TableStore } from '@/store/table.store';

export const getTables = (store: TableStore) => store.tables;

export const getAvailableTables = (store: TableStore) =>
  store.tables.filter((table) => table.status === 'available');

export const getOccupiedTables = (store: TableStore) =>
  store.tables.filter((table) => table.status === 'occupied');

export const getTablesWithReservations = (store: TableStore) =>
  store.tables.filter(
    (table) => table.status === 'reserved' && table.reservation !== null,
  );

export const getTablesWithoutReservations = (store: TableStore) =>
  store.tables.filter((table) => table.reservation === null);

export const getTablesWithFreeChairs = (store: TableStore) =>
  store.tables.filter((table) => table.freeChairs > 0);
