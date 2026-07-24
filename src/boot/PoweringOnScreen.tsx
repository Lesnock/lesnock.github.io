import styles from './PoweringOnScreen.module.css';

interface PoweringOnScreenProps {
  durationMs: number;
  onComplete: () => void;
}

export function PoweringOnScreen({ durationMs, onComplete }: PoweringOnScreenProps) {
  return (
    <p
      className={styles.root}
      style={{ '--duration': `${durationMs}ms` } as React.CSSProperties}
      onAnimationEnd={onComplete}
    >
      Powering On...
    </p>
  );
}
