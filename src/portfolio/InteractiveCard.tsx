import { useRef, type PointerEvent, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './InteractiveCard.module.css';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export function InteractiveCard({ children, className }: InteractiveCardProps) {
  const cardRef = useRef<HTMLLIElement>(null);
  const prefersReducedMotion = useReducedMotion();

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

  return (
    <li ref={cardRef} className={[styles.card, className].filter(Boolean).join(' ')} onPointerMove={handlePointerMove}>
      <div className={styles.cardGlow} aria-hidden="true" />
      {children}
    </li>
  );
}
