import { ExperienceCard } from './ExperienceCard';
import { ProjectCard } from './ProjectCard';
import styles from './Resume.module.css';

const PROJECTS = [
  {
    name: 'Placeholder Project One',
    description: 'Placeholder one-line description of what this project does and why it matters.',
    stack: 'TypeScript · React · Node',
  },
  {
    name: 'Placeholder Project Two',
    description: 'Placeholder one-line description of what this project does and why it matters.',
    stack: 'Python · PostgreSQL',
  },
];

const EXPERIENCE = [
  {
    role: 'Senior Full-Stack Engineer',
    org: 'Placeholder Company',
    period: '2023 — Present',
    points: [
      'Placeholder highlight about a system designed or shipped.',
      'Placeholder highlight about scale, performance, or impact.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    org: 'Placeholder Company',
    period: '2020 — 2023',
    points: [
      'Placeholder highlight about ownership or cross-team work.',
      'Placeholder highlight about a specific technical outcome.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Placeholder Company',
    period: '2018 — 2020',
    points: ['Placeholder highlight about early career work or growth.'],
  },
];

export function Resume() {
  return (
    <main className={styles.main}>
      <section className={styles.block} aria-label="Summary">
        <h2 className={styles.blockLabel}>Summary</h2>
        <p className={styles.summary}>
          Placeholder summary — a couple of sentences on what Caio builds, the kind of
          problems he likes solving, and how he works.
        </p>
      </section>

      <section className={styles.block} aria-label="Projects">
        <h2 className={styles.blockLabel}>Projects</h2>
        <ul className={styles.projectList}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ul>
      </section>

      <section className={styles.block} aria-label="Experience">
        <h2 className={styles.blockLabel}>Experience</h2>
        <ol className={styles.timeline}>
          {EXPERIENCE.map((entry) => (
            <ExperienceCard key={`${entry.role}-${entry.period}`} entry={entry} />
          ))}
        </ol>
      </section>
    </main>
  );
}
