import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { FaAws, FaSitemap } from 'react-icons/fa6';
import { DiMsqlServer } from 'react-icons/di';
import type { IconType } from 'react-icons';
import {
  SiDocker,
  SiGit,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { useLanguage } from '../i18n/LanguageContext';
import { SystemAnalysisPanel } from './SystemAnalysisPanel';
import styles from './TechBox.module.css';

const ICONS: Record<string, IconType> = {
  'Node.js': SiNodedotjs,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Laravel: SiLaravel,
  PHP: SiPhp,
  Docker: SiDocker,
  RabbitMQ: SiRabbitmq,
  Redis: SiRedis,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  'SQL Server': DiMsqlServer,
  AWS: FaAws,
  Git: SiGit,
  'System Design': FaSitemap,
  'REST API': TbApi,
};

export function TechBox() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null);
  const moduleRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const techs = t.resume.techExperience;
  const active = selected !== null ? techs[selected] : null;

  useEffect(() => {
    if (selected === null) {
      setTooltipPos(null);
      return;
    }
    const button = moduleRefs.current[selected];
    const wrapper = wrapperRef.current;
    if (!button || !wrapper) return;
    const buttonRect = button.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    setTooltipPos({
      top: buttonRect.top - wrapperRect.top,
      left: buttonRect.left - wrapperRect.left + buttonRect.width / 2,
    });
  }, [selected]);

  useEffect(() => {
    if (selected === null) return;
    function handlePointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setSelected(null);
      }
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [selected]);

  function handleToggle(index: number) {
    setSelected((current) => (current === index ? null : index));
  }

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.panel}>
        <div className={styles.panelSweep} aria-hidden="true" />
        <ul className={styles.grid}>
          {techs.map(({ name }, index) => {
            const Icon = ICONS[name];
            const isSelected = selected === index;
            return (
              <li key={name} className={styles.moduleWrapper}>
                <button
                  ref={(el) => {
                    moduleRefs.current[index] = el;
                  }}
                  type="button"
                  className={`${styles.module} ${isSelected ? styles.moduleSelected : ''}`}
                  style={{ '--i': index } as CSSProperties}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isSelected}
                >
                  <div className={styles.moduleContent}>
                    <span className={styles.led} aria-hidden="true" />
                    <Icon className={styles.icon} aria-hidden="true" />
                    <span className={styles.name}>{name}</span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {active && tooltipPos && (
        <div
          className={styles.tooltip}
          role="tooltip"
          style={{ top: tooltipPos.top, left: tooltipPos.left }}
        >
          <strong className={styles.tooltipTitle}>{active.name}</strong>
          <p className={styles.tooltipDescription}>{active.description}</p>
        </div>
      )}

      <SystemAnalysisPanel />
    </div>
  );
}
