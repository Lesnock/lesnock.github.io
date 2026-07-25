import type { Language } from '../i18n/translations';

function USFlag() {
  return (
    <svg viewBox="0 0 40 40" width="1em" height="1em" aria-hidden="true">
      <rect width="40" height="40" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y * (40 / 13)} width="40" height={40 / 13} fill="#b22234" />
      ))}
      <rect width="22" height={40 * (7 / 13)} fill="#3c3b6e" />
    </svg>
  );
}

function BRFlag() {
  return (
    <svg viewBox="0 0 40 40" width="1em" height="1em" aria-hidden="true">
      <rect width="40" height="40" fill="#009c3b" />
      <polygon points="20,5 37,20 20,35 3,20" fill="#ffdf00" />
      <circle cx="20" cy="20" r="8" fill="#002776" />
      <path
        d="M12.5 17a11 11 0 0 0 15 6"
        fill="none"
        stroke="#fff"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export const FLAG_ICONS: Record<Language, () => React.JSX.Element> = {
  en: USFlag,
  'pt-BR': BRFlag,
};
