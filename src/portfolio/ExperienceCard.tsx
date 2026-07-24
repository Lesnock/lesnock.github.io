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
}

export function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <InteractiveCard>
      <div className={styles.entryHeader}>
        <h3 className={styles.entryRole}>{entry.role}</h3>
        <span className={styles.entryPeriod}>{entry.period}</span>
      </div>
      <p className={styles.entryOrg}>{entry.org}</p>
      <ul className={styles.entryPoints}>
        {entry.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </InteractiveCard>
  );
}
