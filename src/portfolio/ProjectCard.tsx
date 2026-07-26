import { InteractiveCard } from './InteractiveCard';
import { StatBar } from './StatBar';
import styles from './ProjectCard.module.css';

interface ProjectEntry {
  name: string;
  description: string;
  stack: string;
  difficulty: number;
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
      <div className={styles.questMeta}>
        <StatBar label="Difficulty" value={project.difficulty} labelVisible={false} accent="pink" />
        <span className={styles.impactChip}>[ {project.impact.toUpperCase()} ]</span>
      </div>
      <h3 className={styles.projectName}>{project.name}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
    </InteractiveCard>
  );
}
