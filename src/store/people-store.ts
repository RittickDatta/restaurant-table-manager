import type { Person, RegisteredPerson } from '@/features/people/people.types';
import { create } from 'zustand';

export type PeopleStore = {
  people: RegisteredPerson[];

  addPerson: (person: RegisteredPerson) => void;
  updatePerson: (id: number, person: Partial<Person>) => void;
  deletePerson: (id: number) => void;
};

export const usePeopleStore = create<PeopleStore>()((set) => ({
    
  people: [],

  addPerson: (person) =>
    set((state) => ({
      people: [...state.people, person],
    })),

  updatePerson: (id, person) =>
    set((state) => ({
      people: state.people.map((item) =>
        item.id !== id ? item : { ...item, ...person },
      ),
    })),

  deletePerson: (id) =>
    set((state) => ({
      people: state.people.filter((item) => item.id !== id),
    })),

}));
