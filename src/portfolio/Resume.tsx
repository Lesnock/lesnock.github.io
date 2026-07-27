import { useState } from 'react';
import { FiFolder, FiBriefcase, FiBox } from 'react-icons/fi';
import { ExperienceCard } from './ExperienceCard';
import { ProjectCard } from './ProjectCard';
import { TechBox } from './TechBox';
import { DetailModal } from './DetailModal';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationDict } from '../i18n/translations';
import styles from './Resume.module.css';

type Detail =
  | { kind: 'project'; entry: TranslationDict['resume']['projects'][number] }
  | { kind: 'experience'; entry: TranslationDict['resume']['experience'][number] };

export function Resume() {
  const { t } = useLanguage();
  const [detail, setDetail] = useState<Detail | null>(null);

  return (
    <main className={styles.main}>
      <section id="toolbox" className={styles.block} aria-label={t.resume.techShowcaseAria}>
        <div className={styles.blockHeader}>
          <h2 className={styles.blockLabel}>
            <FiBox aria-hidden="true" /> {t.resume.techShowcaseLabel}
          </h2>
          <span className={styles.hint}>
            <span className={styles.hintDot} aria-hidden="true" />
            {t.resume.techShowcaseHint}
          </span>
        </div>
        <TechBox />
      </section>

      <section id="projects" className={styles.block} aria-label={t.resume.projectsAria}>
        <h2 className={styles.blockLabel}>
          <FiFolder aria-hidden="true" /> {t.resume.projectsLabel}
        </h2>
        <ul className={styles.projectList}>
          {t.resume.projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onSelect={() => setDetail({ kind: 'project', entry: project })}
            />
          ))}
        </ul>
      </section>

      <section className={styles.block} aria-label={t.resume.experienceAria}>
        <h2 className={styles.blockLabel}>
          <FiBriefcase aria-hidden="true" /> {t.resume.experienceLabel}
        </h2>
        <ol className={styles.timeline}>
          {t.resume.experience.map((entry, index) => (
            <ExperienceCard
              key={`${entry.role}-${entry.period}`}
              entry={entry}
              isCurrent={index === 0}
              onSelect={() => setDetail({ kind: 'experience', entry })}
            />
          ))}
        </ol>
      </section>

      {detail?.kind === 'project' && (
        <DetailModal
          title={detail.entry.name}
          subtitle={detail.entry.stack}
          subtitleClassName={styles.modalStack}
          onClose={() => setDetail(null)}
        >
          {detail.entry.image && (
            <img
              src={detail.entry.image}
              alt={detail.entry.name}
              className={styles.modalImage}
            />
          )}
          <p>{detail.entry.details}</p>
          {detail.entry.benefits && detail.entry.benefits.length > 0 && (
            <section className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>{t.resume.benefitsLabel}</h3>
              <ul className={styles.modalPoints}>
                {detail.entry.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </section>
          )}
          {detail.entry.challenges && detail.entry.challenges.length > 0 && (
            <section className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>{t.resume.challengesLabel}</h3>
              <ul className={styles.modalPoints}>
                {detail.entry.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </section>
          )}
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
