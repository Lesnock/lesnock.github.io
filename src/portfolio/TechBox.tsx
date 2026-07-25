import { useEffect, useState, type CSSProperties } from 'react';
import { FiPackage } from 'react-icons/fi';
import { SiNodedotjs, SiTypescript, SiReact, SiPhp, SiVuedotjs } from 'react-icons/si';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './TechBox.module.css';

const TECHS = [
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'PHP', Icon: SiPhp },
  { name: 'Vue', Icon: SiVuedotjs },
];

const STEP_MS = 550;
const HOLD_OUT_STEPS = 3;
const HOLD_IN_STEPS = 2;
const RETURN_START = TECHS.length + HOLD_OUT_STEPS;
const CYCLE_LENGTH = RETURN_START + TECHS.length + HOLD_IN_STEPS;

export function TechBox() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setStep((current) => (current + 1) % CYCLE_LENGTH);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const boxOpen =
    !reducedMotion &&
    (step < TECHS.length || (step >= RETURN_START && step < RETURN_START + TECHS.length));

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.stage}
        style={{ '--count': TECHS.length } as CSSProperties}
        aria-hidden="true"
      >
        <div className={`${styles.box} ${boxOpen ? styles.boxOpen : ''}`}>
          <div className={styles.crateLid} />
          <div className={styles.crateBody}>
            <FiPackage />
          </div>
        </div>

        <div className={styles.row}>
          {TECHS.map(({ name, Icon }, index) => {
            const returnAt = RETURN_START + (TECHS.length - 1 - index);
            const isOut = reducedMotion || (step >= index && step < returnAt);
            return (
              <div
                key={name}
                className={`${styles.item} ${isOut ? styles.itemOut : ''}`}
                style={{ '--i': index } as CSSProperties}
                title={name}
              >
                <Icon />
              </div>
            );
          })}
        </div>
      </div>

      <p className={styles.srOnly}>{TECHS.map(({ name }) => name).join(', ')}</p>
      <p className={styles.caption}>{t.resume.techShowcaseCaption}</p>
    </div>
  );
}
