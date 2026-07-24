import { useState } from 'react';
import { ExperienceCard } from './ExperienceCard';
import { ProjectCard } from './ProjectCard';
import { DetailModal } from './DetailModal';
import styles from './Resume.module.css';

const PROJECTS = [
  {
    name: 'Placeholder Project One',
    description: 'Placeholder one-line description of what this project does and why it matters.',
    stack: 'TypeScript · React · Node',
    details:
      'Placeholder expanded write-up of Project One — the problem it solved, the approach taken, and the outcome or impact once shipped.',
  },
  {
    name: 'Placeholder Project Two',
    description: 'Placeholder one-line description of what this project does and why it matters.',
    stack: 'Python · PostgreSQL',
    details:
      'Placeholder expanded write-up of Project Two — the problem it solved, the approach taken, and the outcome or impact once shipped.',
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
    details:
      'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
  },
  {
    role: 'Full-Stack Engineer',
    org: 'Placeholder Company',
    period: '2020 — 2023',
    points: [
      'Placeholder highlight about ownership or cross-team work.',
      'Placeholder highlight about a specific technical outcome.',
    ],
    details:
      'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
  },
  {
    role: 'Software Engineer',
    org: 'Placeholder Company',
    period: '2018 — 2020',
    points: ['Placeholder highlight about early career work or growth.'],
    details:
      'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
  },
  {
    role: 'Software Engineer',
    org: 'Placeholder Company',
    period: '2018 — 2020',
    points: ['Placeholder highlight about early career work or growth.'],
    details:
      'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
  },
  {
    role: 'Software Engineer',
    org: 'Placeholder Company',
    period: '2018 — 2020',
    points: ['Placeholder highlight about early career work or growth.'],
    details:
      'Placeholder expanded write-up of this role — scope of ownership, notable projects, and how the role evolved over time.',
  },
];

type Detail =
  | { kind: 'project'; entry: (typeof PROJECTS)[number] }
  | { kind: 'experience'; entry: (typeof EXPERIENCE)[number] };

export function Resume() {
  const [detail, setDetail] = useState<Detail | null>(null);

  return (
    <main className={styles.main}>
      <section className={styles.block} aria-label="Summary">
        <h2 className={styles.blockLabel}>Summary</h2>
        <div className={styles.summaryRow}>
          <img src="/profile.jpg" alt="Caio Lesnock" className={styles.avatar} />
          <p className={styles.summary}>
            Hi!👋 <br />
            I'm Caio Lesnock, a Software Engineer with {' '}
            <span className={styles.summaryHighlight}>10+ years</span> of experience building
            scalable web applications. Feel free to explore some of my work below.
          </p>
        </div>
      </section>

      <section className={styles.block} aria-label="Projects">
        <h2 className={styles.blockLabel}>Projects</h2>
        <ul className={styles.projectList}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onSelect={() => setDetail({ kind: 'project', entry: project })}
            />
          ))}
        </ul>
      </section>

      <section className={styles.block} aria-label="Experience">
        <h2 className={styles.blockLabel}>Experience</h2>
        <ol className={styles.timeline}>
          {EXPERIENCE.map((entry) => (
            <ExperienceCard
              key={`${entry.role}-${entry.period}`}
              entry={entry}
              onSelect={() => setDetail({ kind: 'experience', entry })}
            />
          ))}
        </ol>
      </section>

      {detail?.kind === 'project' && (
        <DetailModal
          title={detail.entry.name}
          subtitle={detail.entry.stack}
          onClose={() => setDetail(null)}
        >
          <p>{detail.entry.details}</p>
        </DetailModal>
      )}

      {detail?.kind === 'experience' && (
        <DetailModal
          title={detail.entry.role}
          subtitle={`${detail.entry.org} · ${detail.entry.period}`}
          onClose={() => setDetail(null)}
        >
          <p>{detail.entry.details}</p>
          <ul className={styles.modalPoints}>
            {detail.entry.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </DetailModal>
      )}
    </main>
  );
}
