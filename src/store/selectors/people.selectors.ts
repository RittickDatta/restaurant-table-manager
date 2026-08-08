import type { PeopleStore } from '@/store/people.store';

export const getPeople = (store: PeopleStore) => store.people;

export const getPeoplePresent = (store: PeopleStore) =>
  store.people.filter((person) => !person.isAbsent);

export const getPeopleByRole = (store: PeopleStore) => {
  const supervisor = store.people.filter(
    (person) => person.role === 'supervisor',
  );
  const waiters = store.people.filter((person) => person.role === 'waiter');
  const customers = store.people.filter((person) => person.role === 'customer');

  return {
    supervisor,
    waiters,
    customers,
    waitersCount: waiters.length ?? 0,
    customersCount: customers.length ?? 0,
  };
};
