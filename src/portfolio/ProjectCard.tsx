import { InteractiveCard } from './InteractiveCard';
import styles from './ProjectCard.module.css';

interface ProjectEntry {
  name: string;
  description: string;
  stack: string;
}

interface ProjectCardProps {
  project: ProjectEntry;
  onSelect?: () => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <InteractiveCard onActivate={onSelect}>
      <h3 className={styles.projectName}>{project.name}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <p className={styles.projectStack}>{project.stack}</p>
    </InteractiveCard>
  );
}
