import type { CSSProperties } from 'react';
import { FaAws, FaSitemap } from 'react-icons/fa6';
import {
  SiDocker,
  SiGit,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiRabbitmq,
  SiRedis,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { StatBar } from './StatBar';
import { SystemAnalysisPanel } from './SystemAnalysisPanel';
import styles from './TechBox.module.css';

// Skill levels (1-5) are editorial placeholders — tune to reflect real proficiency.
const TECHS = [
  { name: 'Node.js', Icon: SiNodedotjs, level: 5 },
  { name: 'TypeScript', Icon: SiTypescript, level: 5 },
  { name: 'React', Icon: SiReact, level: 5 },
  { name: 'Next.js', Icon: SiNextdotjs, level: 4 },
  { name: 'Laravel', Icon: SiLaravel, level: 3 },
  { name: 'PHP', Icon: SiPhp, level: 3 },
  { name: 'Docker', Icon: SiDocker, level: 4 },
  { name: 'RabbitMQ', Icon: SiRabbitmq, level: 3 },
  { name: 'Redis', Icon: SiRedis, level: 4 },
  { name: 'MySQL', Icon: SiMysql, level: 4 },
  { name: 'AWS', Icon: FaAws, level: 4 },
  { name: 'Git', Icon: SiGit, level: 5 },
  { name: 'System Design', Icon: FaSitemap, level: 5 },
];

export function TechBox() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.panelSweep} aria-hidden="true" />
        <ul className={styles.grid}>
          {TECHS.map(({ name, Icon, level }, index) => (
            <li
              key={name}
              className={styles.module}
              style={{ '--i': index } as CSSProperties}
              tabIndex={0}
              aria-label={`${name} — level ${level} of 5`}
            >
              <div className={styles.moduleContent}>
                <span className={styles.led} aria-hidden="true" />
                <Icon className={styles.icon} aria-hidden="true" />
                <span className={styles.name}>{name}</span>
                <StatBar label={name} value={level} labelVisible={false} accent="secondary" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <SystemAnalysisPanel />
    </div>
  );
}
