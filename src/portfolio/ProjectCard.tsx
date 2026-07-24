import { InteractiveCard } from './InteractiveCard';
import styles from './ProjectCard.module.css';

interface ProjectEntry {
  name: string;
  description: string;
  stack: string;
}

interface ProjectCardProps {
  project: ProjectEntry;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <InteractiveCard>
      <h3 className={styles.projectName}>{project.name}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <p className={styles.projectStack}>{project.stack}</p>
    </InteractiveCard>
  );
}
