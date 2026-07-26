import type { CSSProperties } from 'react';
import styles from './StatBar.module.css';

interface StatBarProps {
  label: string;
  value: number;
  max?: number;
  labelVisible?: boolean;
  accent?: 'primary' | 'secondary' | 'purple' | 'pink';
}

export function StatBar({ label, value, max = 5, labelVisible = true, accent = 'primary' }: StatBarProps) {
  const pips = Array.from({ length: max }, (_, index) => index < value);

  return (
    <div className={styles.wrapper} aria-label={`${label}: ${value} of ${max}`}>
      {labelVisible && <span className={styles.label}>{label}</span>}
      <span className={styles.pips} aria-hidden="true">
        {pips.map((filled, index) => (
          <span
            key={index}
            className={`${styles.pip} ${filled ? styles.pipFilled : ''}`}
            data-accent={accent}
            style={{ '--i': index } as CSSProperties}
          />
        ))}
      </span>
    </div>
  );
}
