import { useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Spinner } from './Spinner';
import styles from './InteractiveCard.module.css';

const ACTIVATION_DELAY_MS = 500;

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  onActivate?: () => void;
}

export function InteractiveCard({ children, className, onActivate }: InteractiveCardProps) {
  const cardRef = useRef<HTMLLIElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(false);

  function handlePointerMove(event: PointerEvent<HTMLLIElement>) {
    if (prefersReducedMotion) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    card.style.setProperty('--mx', `${(px * 100).toFixed(2)}%`);
    card.style.setProperty('--my', `${(py * 100).toFixed(2)}%`);
  }

  function activate() {
    if (!onActivate || loading) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      onActivate();
    }, ACTIVATION_DELAY_MS);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLLIElement>) {
    if (!onActivate) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    activate();
  }

  const interactive = Boolean(onActivate);

  return (
    <li
      ref={cardRef}
      className={[styles.card, loading ? styles.loading : '', className].filter(Boolean).join(' ')}
      onPointerMove={handlePointerMove}
      onClick={interactive ? activate : undefined}
      onKeyDown={interactive ? handleKeyDown : undefined}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? 'button' : undefined}
      aria-busy={interactive ? loading : undefined}
    >
      <div className={styles.cardGlow} aria-hidden="true" />
      <div className={styles.cardContent}>{children}</div>
      {loading && (
        <div className={styles.cardLoading} aria-hidden="true">
          <Spinner />
        </div>
      )}
    </li>
  );
}
