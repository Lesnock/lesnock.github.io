import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { FaAws, FaSitemap } from 'react-icons/fa6';
import { DiMsqlServer } from 'react-icons/di';
import { FiArrowLeft } from 'react-icons/fi';
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
  const moduleRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const flipRect = useRef<DOMRect | null>(null);
  const flipIndex = useRef<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const techs = t.resume.techExperience;
  const active = selected !== null ? techs[selected] : null;

  useEffect(() => {
    if (selected === null) return;
    wrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selected]);

  useLayoutEffect(() => {
    const from = flipRect.current;
    const index = flipIndex.current;
    flipRect.current = null;
    flipIndex.current = null;
    if (index === null || !from) return;

    const button = moduleRefs.current[index];
    if (!button) return;

    const to = button.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const sx = from.width / to.width;
    const sy = from.height / to.height;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || (dx === 0 && dy === 0 && sx === 1 && sy === 1)) return;

    button.style.transition = 'none';
    button.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    button.getBoundingClientRect();
    requestAnimationFrame(() => {
      button.style.transition = '';
      button.style.transform = '';
    });
  }, [selected]);

  function handleSelect(index: number) {
    const button = moduleRefs.current[index];
    flipRect.current = button ? button.getBoundingClientRect() : null;
    flipIndex.current = index;
    setSelected(index);
  }

  function handleBack() {
    const button = selected !== null ? moduleRefs.current[selected] : null;
    flipRect.current = button ? button.getBoundingClientRect() : null;
    flipIndex.current = selected;
    setSelected(null);
  }

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.panel}>
        <div className={styles.panelSweep} aria-hidden="true" />
        <ul className={`${styles.grid} ${selected !== null ? styles.gridDetail : ''}`}>
          {techs.map(({ name }, index) => {
            const Icon = ICONS[name];
            const isSelected = selected === index;
            const isHidden = selected !== null && !isSelected;
            return (
              <li key={name} className={styles.moduleWrapper}>
                <button
                  ref={(el) => {
                    moduleRefs.current[index] = el;
                  }}
                  type="button"
                  className={`${styles.module} ${isSelected ? styles.moduleSelected : ''} ${
                    isHidden ? styles.moduleHidden : ''
                  }`}
                  style={{ '--i': index } as CSSProperties}
                  onClick={() => handleSelect(index)}
                  aria-expanded={isSelected}
                  aria-hidden={isHidden || undefined}
                  tabIndex={isHidden ? -1 : 0}
                >
                  <div className={styles.moduleContent}>
                    <span className={styles.led} aria-hidden="true" />
                    <Icon className={styles.icon} aria-hidden="true" />
                    <span className={styles.name}>{name}</span>
                  </div>
                  <span className={styles.viewDetails} aria-hidden="true">
                    {t.resume.techShowcaseViewDetails}
                  </span>
                </button>
              </li>
            );
          })}

          {active && (
            <li className={styles.backWrapper}>
              <button
                type="button"
                className={styles.backButton}
                onClick={handleBack}
                aria-label={t.resume.techShowcaseBackAria}
              >
                <FiArrowLeft aria-hidden="true" />
              </button>
            </li>
          )}

          {active && (
            <li className={styles.detailWrapper}>
              <strong className={styles.detailTitle}>{active.name}</strong>
              <p className={styles.detailDescription}>{active.description}</p>
            </li>
          )}
        </ul>
      </div>

      <SystemAnalysisPanel />
    </div>
  );
}
