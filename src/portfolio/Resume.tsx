import styles from './Resume.module.css';

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

      <section className={styles.block} aria-label="Experience">
        <h2 className={styles.blockLabel}>Experience</h2>
        <ol className={styles.timeline}>
          {EXPERIENCE.map((entry) => (
            <li key={`${entry.role}-${entry.period}`} className={styles.entry}>
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
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.block} aria-label="Projects">
        <h2 className={styles.blockLabel}>Projects</h2>
        <ul className={styles.projectList}>
          {PROJECTS.map((project) => (
            <li key={project.name} className={styles.project}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectStack}>{project.stack}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
