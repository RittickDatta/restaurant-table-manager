import type { PeopleStore } from '@/store/people-store';

export const getPeople = (store: PeopleStore) => store.people;

export const getPeopleByRole = (store: PeopleStore, role: string) =>
  store.people.filter((person) => person.role === role);

export const getPersonById = (store: PeopleStore, id: number) =>
  store.people.find((person) => person.id === id);

export const getPersonsContactInfoById = (store: PeopleStore, id: number) =>
  store.people
    .filter((person) => person.id === id)
    .map((person) => ({
      email: person.email,
      phone: person.phone,
    }));

export const isChildById = (store: PeopleStore, id: number) =>
  store.people.some((person) => person.id === id && person.iChild);

export const isAnyChildInGroup = (store: PeopleStore, ids: number[]) =>
  store.people.some(
    (person) => ids.includes(person.id) && person.iChild === true,
  );
