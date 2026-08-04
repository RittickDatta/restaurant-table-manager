import type { Person } from '../people/people.types';

type TableType =
  | 'single-seator'
  | 'two-seator'
  | 'three-seator'
  | 'four-seator'
  | 'six-seator'
  | 'eight-seator'
  | 'ten-seator'
  | 'twelve-seator';

type TableStatus = 'available' | 'occupied' | 'reserved';

type Reservation = {
  isReserved: boolean;
  reservationDetails: ReservationDetails;
};

type ReservationDetails = {
  name: Pick<Person, 'name'>;
  reservationTime: Date;
  numberOfGuests: number;
  children: {
    anyChild: boolean;
    numberOfChildren: number;
  };
};

interface Table {
  id: number;

  type: TableType;
  capacity: number;

  status: TableStatus;

  numberOfGuests: number;
  freeChairs: number;

  reservation: Reservation | null;
}

export type { Table, TableType, TableStatus, Reservation, ReservationDetails };
