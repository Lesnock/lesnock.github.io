import styles from './Scanlines.module.css';

export function Scanlines() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.sweep} />
    </div>
  );
}
