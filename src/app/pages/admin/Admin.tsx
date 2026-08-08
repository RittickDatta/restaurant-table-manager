import styles from './Admin.module.css';

import StaffPanel from './staff-panel/StaffPanel';
import TablesPanel from './tables-panel/TablesPanel';
import OrdersPanel from './orders-panel/OrdersPanel';
import MenuPanel from './menu-panel/MenuPanel';

export default function Admin() {

  return (
    <>
      <h2>Control Panels</h2>
      <div className={styles.adminContainer}>
        <StaffPanel />

        <TablesPanel/>

        <OrdersPanel/>

        <MenuPanel />
      </div>
    </>
  );
}
