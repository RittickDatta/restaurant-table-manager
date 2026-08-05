import styles from './ControlView.module.css';

type Detail = {
  title: string;
  value: number;
};

type ControlViewProps = {
  detail: Detail;
  actions?: React.ReactNode;
};

export default function ControlView({
  detail: { title: detailTitle, value },
  actions,
}: ControlViewProps) {
  return (
    <article className={styles.controlView}>
        <div className={styles.controlViewDetail}>
          <div className={styles.detailRow}><h3 className={styles.detailTitle}>{detailTitle}</h3>
          <p className={styles.detailValue}>{value}</p></div>
        </div>
        <div className={styles.controlViewActions}>{actions}</div>
    </article>
  );
}
