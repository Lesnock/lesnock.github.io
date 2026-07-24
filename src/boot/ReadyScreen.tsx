import styles from './ReadyScreen.module.css';

interface ReadyScreenProps {
  onReadyClick: () => void;
}

export function ReadyScreen({ onReadyClick }: ReadyScreenProps) {
  return (
    <div className={styles.root}>
      <p className={styles.status}>System Ready</p>
      <button type="button" className={styles.button} onClick={onReadyClick} autoFocus>
        [ Conhecer Caio ]
      </button>
    </div>
  );
}
