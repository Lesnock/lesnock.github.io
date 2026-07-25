import { GlitchText } from '../effects/GlitchText';
import { OPERATOR_NAME } from '../boot/constants';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Profile">
      <div className={styles.identity}>
        <p className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          Online
        </p>
        <GlitchText as="h1" text={OPERATOR_NAME} className={styles.name} />
        <p className={styles.title}>Senior Software Engineer</p>
      </div>
    </aside>
  );
}
