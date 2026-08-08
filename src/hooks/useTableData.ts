import {
  getAvailableTables,
  getOccupiedTables,
  getTables,
  getTablesWithFreeChairs,
  getTablesWithoutReservations,
  getTablesWithReservations,
} from '@/store/selectors/tables.selectors';
import { useTableStore } from '@/store/table.store';

export const useTableData = () => {
  const tables = useTableStore(getTables);
  const availableTables = useTableStore(getAvailableTables);
  const occupiedTables = useTableStore(getOccupiedTables);
  const tablesWithReservations = useTableStore(getTablesWithReservations);
  const tablesWithoutReservations = useTableStore(getTablesWithoutReservations);
  const tablesWithFreeChairs = useTableStore(getTablesWithFreeChairs);

  return {
    tables,
    availableTables,
    occupiedTables,
    tablesWithReservations,
    tablesWithoutReservations,
    tablesWithFreeChairs,
  };
};
