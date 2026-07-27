import { InteractiveCard } from './InteractiveCard';
import styles from './ProjectCard.module.css';

interface ProjectEntry {
  name: string;
  description: string;
  stack: string;
  impact: string;
}

interface ProjectCardProps {
  project: ProjectEntry;
  onSelect?: () => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const techs = project.stack.split('·').map((tech) => tech.trim()).filter(Boolean);

  return (
    <InteractiveCard
      onActivate={onSelect}
      footer={
        <ul className={styles.techList}>
          {techs.map((tech) => (
            <li key={tech} className={styles.techTag}>
              {tech}
            </li>
          ))}
        </ul>
      }
    >
      <h3 className={styles.projectName}>{project.name}</h3>
      <span className={styles.impactChip}>[ {project.impact.toUpperCase()} ]</span>
      <p className={styles.projectDescription}>{project.description}</p>
    </InteractiveCard>
  );
}
