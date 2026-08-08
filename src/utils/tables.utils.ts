import type { Table, TableStatus, TableType } from "@/features/table/table.types";

export const getTableById = (tables: Table[], id: number) =>
  tables.find((table) => table.id === id);

export const getTablesByType = (tables: Table[], type: TableType) =>
  tables.filter((table) => table.type === type);

export const getTablesByStatus = (tables: Table[], status: TableStatus) =>
  tables.filter((table) => table.status === status);

export const getReservationDetailsByTableId = (tables: Table[], id: number) => {
  const table = tables.find((table) => table.id === id);
  return table?.reservation?.reservationDetails || null;
};

export const getTablesWithMinimumCapacity = (
  tables: Table[],
  minCapacity: number,
) => tables.filter((table) => table.capacity >= minCapacity);

export const getTablesWithMaximumCapacity = (
  tables: Table[],
  maxCapacity: number,
) => tables.filter((table) => table.capacity <= maxCapacity);

export const getTablesWithGuestCount = (tables: Table[], guestCount: number) =>
  tables.filter((table) => table.numberOfGuests === guestCount);