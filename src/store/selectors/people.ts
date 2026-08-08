import type { Role } from '@/features/people/people.types';
import type { PeopleStore } from '@/store/people-store';

export const getPeople = (store: PeopleStore) => store.people;

export const getPeopleByRole = (role: Role) => (store: PeopleStore) =>
  store.people.filter((person) => person.role === role);

export const getPersonById = (id: number) => (store: PeopleStore) =>
  store.people.find((person) => person.id === id);

export const getPeoplePresent = (store: PeopleStore) => 
  store.people.filter((person) => !person.isAbsent)

export const getPersonsContactInfoById = (id: number) => (store: PeopleStore) =>
  store.people
    .filter((person) => person.id === id)
    .map((person) => ({
      email: person.email,
      phone: person.phone,
    }));

export const isChildById = (id: number) => (store: PeopleStore) =>
  store.people.some((person) => person.id === id && person.iChild);


