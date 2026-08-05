import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className={styles.homeContainer}>
      <div>
        <h1 className={styles.appTitle}>
          Welcome to the Restaurant Table Manager
        </h1>
        <p className={styles.appDescription}>
          Manage your restaurant tables, menu items, and orders with ease.
        </p>
      </div>

      <div className={styles.actions}>
        <Button
          text="Get Started"
          onClick={() => {
            navigate('/admin');
          }}
        />
      </div>
    </section>
  );
}
