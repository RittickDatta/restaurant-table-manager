import { useShallow } from 'zustand/shallow';
import styles from './Admin.module.css';
import ControlPanel from './helper-components/control-panel/ControlPanel';
import ControlView from './helper-components/control-view/ControlView';

import { usePeopleStore } from '@/store/people-store';
import { getPeople, getPeopleByRole } from '@/store/selectors/people';

export default function Admin() {
  const staff = usePeopleStore(getPeople);
  const staffByRole = usePeopleStore(useShallow(getPeopleByRole('waiter')))
  console.log("🚀 ~ Admin ~ staffByRole:", staffByRole)
  const presentStaff = staff.filter((person) => !person.isAbsent);

  return (
    <>
      <h2>Control Panels</h2>
      <div className={styles.adminContainer}>
        <ControlPanel title="Staff Management">
          <ControlView detail={{ title: 'Total Staff', value: staff.length }} />
          <ControlView
            detail={{ title: 'Present Staff', value: presentStaff.length }}
          />
        </ControlPanel>

        <ControlPanel title="Table Management">
          <p>Content for Control Panel 2</p>
        </ControlPanel>

        <ControlPanel title="Menu Management">
          <p>Content for Control Panel 3</p>
        </ControlPanel>
      </div>
    </>
  );
}
