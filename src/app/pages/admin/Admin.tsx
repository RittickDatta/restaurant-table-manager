import { useNavigate } from 'react-router-dom';
import styles from './Admin.module.css';
import ControlPanel from './helper-components/control-panel/ControlPanel';
import ControlView from './helper-components/control-view/ControlView';
import Button from '@/app/shared/Button';

import { usePeopleStore } from '@/store/people-store';
import { getPeople } from '@/store/selectors/people';

export default function Admin() {
  const navigate = useNavigate();
  const staff = usePeopleStore(getPeople);

  return (
    <>
      <h2>Control Panels</h2>
      <div className={styles.adminContainer}>
        <ControlPanel title="Staff Management">
          <ControlView
            detail={{ title: 'Total Staff', value: staff.length }}
            actions={
                <Button
                  text="Add Staff"
                  onClick={() => navigate('/staff')}
                />
            }
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
