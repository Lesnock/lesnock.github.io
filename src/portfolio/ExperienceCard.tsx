import { InteractiveCard } from './InteractiveCard';
import styles from './ExperienceCard.module.css';

interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  points: string[];
}

interface ExperienceCardProps {
  entry: ExperienceEntry;
  isCurrent?: boolean;
  onSelect?: () => void;
}

export function ExperienceCard({ entry, isCurrent, onSelect }: ExperienceCardProps) {
  return (
    <InteractiveCard onActivate={onSelect}>
      <div className={styles.entryHeader}>
        <h3 className={styles.entryRole}>{entry.role}</h3>
        <span className={styles.entryPeriod}>[ {entry.period.toUpperCase()} ]</span>
      </div>
      <p className={styles.entryOrg}>
        {isCurrent && <span className={styles.activeDot} aria-hidden="true" />}
        {entry.org}
      </p>
      <ul className={styles.entryPoints}>
        {entry.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </InteractiveCard>
  );
}
