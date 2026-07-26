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
import { useLanguage } from '../i18n/LanguageContext';
import { SystemAnalysisPanel } from './SystemAnalysisPanel';
import styles from './TechBox.module.css';

const TECHS = [
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Laravel', Icon: SiLaravel },
  { name: 'PHP', Icon: SiPhp },
  { name: 'Docker', Icon: SiDocker },
  { name: 'RabbitMQ', Icon: SiRabbitmq },
  { name: 'Redis', Icon: SiRedis },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'AWS', Icon: FaAws },
  { name: 'Git', Icon: SiGit },
  { name: 'System Design', Icon: FaSitemap },
];

export function TechBox() {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.panelSweep} aria-hidden="true" />
        <ul className={styles.grid}>
          {TECHS.map(({ name, Icon }, index) => (
            <li
              key={name}
              className={styles.module}
              style={{ '--i': index } as CSSProperties}
              tabIndex={0}
              aria-label={`${name} — status online`}
            >
              <div className={styles.moduleContent}>
                <span className={styles.led} aria-hidden="true" />
                <Icon className={styles.icon} aria-hidden="true" />
                <span className={styles.name}>{name}</span>
                <span className={styles.status} aria-hidden="true">
                  ONLINE
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <SystemAnalysisPanel />
    </div>
  );
}
