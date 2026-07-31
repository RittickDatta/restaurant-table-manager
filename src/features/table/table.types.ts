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

  isOccupied: boolean;
  numberOfGuests: number;
  freeChairs: number;

  reservation: Reservation;
}

export type { Table };
