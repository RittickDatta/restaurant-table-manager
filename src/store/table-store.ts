import type { Table } from '@/features/table/table.types';
import { create } from 'zustand';

export type TableStore = {
  tables: Table[];

  //   getTableByType: (tableType: TableType) => Table[];
  addTable: (table: Table) => void;
  updateTable: (id: number, table: Partial<Table>) => void;
  deleteTable: (id: number) => void;
};

export const useTableStore = create<TableStore>()((set) => ({

  tables: [],

  addTable: (table) =>
    set((state) => ({
      tables: [...state.tables, table],
    })),

  updateTable: (id, table) =>
    set((state) => ({
      tables: state.tables.map((item) =>
        item.id !== id ? item : { ...item, ...table },
      ),
    })),

  deleteTable: (id) =>
    set((state) => ({
      tables: state.tables.filter((item) => item.id !== id),
    })),

}));
