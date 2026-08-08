type Role = 'supervisor' | 'waiter' | 'customer';

interface Person {
  name: string;
  email: string;
  phone?: string;
  role: Role;
  iChild?: boolean;
}

type RegisteredPerson = Person & {
  id: number;
  isAbsent?: boolean | undefined;
};

type PersonContact = Pick<Person, 'email' | 'phone'>;

type PersonDisplayInfo = Omit<RegisteredPerson, 'id'>;

type PersonFields = keyof Person;
type PersonErrors = Record<PersonFields, string>;

export type {
  Person,
  Role,
  RegisteredPerson,
  PersonContact,
  PersonDisplayInfo,
  PersonFields,
  PersonErrors,
};
