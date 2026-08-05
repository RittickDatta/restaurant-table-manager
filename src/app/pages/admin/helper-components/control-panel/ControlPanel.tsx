import styles from './ControlPanel.module.css';

type ControlPanelProps = {
  title: string;
  children: React.ReactNode;
};

export default function ControlPanel({ title, children }: ControlPanelProps) {
  return (
    <div className={styles.controlPanel}>
      <h2 className={styles.panelTitle}>{title}</h2>
      <div className={styles.panelContent}>{children}</div>
    </div>
  );
}
