import type { RegisteredPerson } from "@/features/people/people.types";

export const getPersonById = (people: RegisteredPerson[], id: number) =>
  people.find((person) => person.id === id);

export const getPersonsContactInfoById = (
  people: RegisteredPerson[],
  id: number,
) => {
  const person = getPersonById(people, id);

  return {
    email: person?.email,
    phone: person?.phone,
  };
};

export const isAnyChildInGroup = (people: RegisteredPerson[]) =>
  people.filter((person) => person.iChild).length > 0;