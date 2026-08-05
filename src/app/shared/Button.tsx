import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button className={styles.Button} onClick={onClick}>
      {text}
    </button>
  );
}