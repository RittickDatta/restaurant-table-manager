import type { TableStatus, TableType } from '@/features/table/table.types';
import type { TableStore } from '@/store/table-store';

export const getTables = (store: TableStore) => store.tables;

export const getTableById = (store: TableStore, id: number) =>
  store.tables.find((table) => table.id === id);

export const getTablesByType = (store: TableStore, type: TableType) =>
  store.tables.filter((table) => table.type === type);

export const getTablesByStatus = (store: TableStore, status: TableStatus) =>
  store.tables.filter((table) => table.status === status);

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

export const getReservationDetailsByTableId = (
  store: TableStore,
  id: number,
) => {
  const table = store.tables.find((table) => table.id === id);
  return table?.reservation?.reservationDetails || null;
};

export const getTablesWithFreeChairs = (store: TableStore) =>
  store.tables.filter((table) => table.freeChairs > 0);

export const getTablesWithMinimumCapacity = (
  store: TableStore,
  minCapacity: number,
) => store.tables.filter((table) => table.capacity >= minCapacity);

export const getTablesWithMaximumCapacity = (
  store: TableStore,
  maxCapacity: number,
) => store.tables.filter((table) => table.capacity <= maxCapacity);

export const getTablesWithGuestCount = (store: TableStore, guestCount: number) =>
  store.tables.filter((table) => table.numberOfGuests === guestCount);