import { usePeopleStore } from '@/store/people.store';
import {
  getPeople,
  getPeopleByRole,
  getPeoplePresent,
} from '@/store/selectors/people.selectors';

export default function usePeopleData() {
  const people = usePeopleStore(getPeople);
  const presentPeople = usePeopleStore(getPeoplePresent);
  const peopleByRole = usePeopleStore(getPeopleByRole);

  return {
    people,
    presentPeople,
    peopleByRole,
  };
}
