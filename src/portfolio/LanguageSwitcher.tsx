import { useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES, type Language } from '../i18n/translations';
import { FLAG_ICONS } from './flags';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  function selectLanguage(code: Language) {
    setLanguage(code);
    setOpen(false);
  }

  const CurrentFlag = FLAG_ICONS[language];

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-label={t.languageSwitcher.aria}
        aria-haspopup="listbox"
        aria-expanded={open}
        title={t.languageSwitcher.aria}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.flagIcon}>
          <CurrentFlag />
        </span>
        <span className={styles.triggerLabel}>{LANGUAGES[language].shortLabel}</span>
        <FiChevronDown aria-hidden="true" className={styles.chevron} />
      </button>

      {open && (
        <ul className={styles.dropdown} role="listbox" aria-label={t.languageSwitcher.aria}>
          {(Object.entries(LANGUAGES) as [Language, (typeof LANGUAGES)[Language]][]).map(
            ([code, { label }]) => {
              const FlagIcon = FLAG_ICONS[code];
              return (
                <li key={code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={code === language}
                    className={[styles.option, code === language ? styles.optionActive : '']
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => selectLanguage(code)}
                  >
                    <span className={styles.flagIcon}>
                      <FlagIcon />
                    </span>
                    {label}
                  </button>
                </li>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
}
