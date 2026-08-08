import type { TableStatus, TableType } from '@/features/table/table.types';
import type { TableStore } from '@/store/table-store';

export const getTables = (store: TableStore) => store.tables;

export const getTableById = (id: number) => (store: TableStore) =>
  store.tables.find((table) => table.id === id);

export const getTablesByType = (type: TableType) => (store: TableStore) =>
  store.tables.filter((table) => table.type === type);

export const getTablesByStatus = (status: TableStatus) => (store: TableStore) =>
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

export const getReservationDetailsByTableId =
  (id: number) => (store: TableStore) => {
    const table = store.tables.find((table) => table.id === id);
    return table?.reservation?.reservationDetails || null;
  };

export const getTablesWithFreeChairs = (store: TableStore) =>
  store.tables.filter((table) => table.freeChairs > 0);

export const getTablesWithMinimumCapacity =
  (minCapacity: number) => (store: TableStore) =>
    store.tables.filter((table) => table.capacity >= minCapacity);

export const getTablesWithMaximumCapacity =
  (maxCapacity: number) => (store: TableStore) =>
    store.tables.filter((table) => table.capacity <= maxCapacity);

export const getTablesWithGuestCount =
  (guestCount: number) => (store: TableStore) =>
    store.tables.filter((table) => table.numberOfGuests === guestCount);
