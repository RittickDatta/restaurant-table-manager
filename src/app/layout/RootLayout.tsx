import { Link, Outlet } from 'react-router-dom';
import styles from './RootLayout.module.css';

export default function RootLayout() {
  return (
    <>
      <header className={styles.appHeader}>
        <span>
          <Link
            to="/"
            className={styles.appTitle}
          >
            Restaurant Table Manager
          </Link>
        </span>
        <div className={styles.navLinks}>
          <Link
            className={styles.navLink}
            to="/"
          >
            Home
          </Link>
          <Link
            className={styles.navLink}
            to="/admin"
          >
            Admin
          </Link>
          <Link
            className={styles.navLink}
            to="/staff"
          >
            Staff
          </Link>
          <Link
            className={styles.navLink}
            to="/tables"
          >
            Tables
          </Link>
          <Link
            className={styles.navLink}
            to="/menu"
          >
            Menu
          </Link>
          <Link
            className={styles.navLink}
            to="/orders"
          >
            Orders
          </Link>
        </div>
      </header>

      <main className={styles.appMain}>
        <Outlet />
      </main>
    </>
  );
}
