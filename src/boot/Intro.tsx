import { LoadingBar } from './LoadingBar';
import { BootMessages } from './BootMessages';
import { ReadyScreen } from './ReadyScreen';
import { PoweringOnScreen } from './PoweringOnScreen';
import type { BootHandlers, BootState } from './types';
import type { BOOT_TIMINGS } from './constants';
import styles from './Intro.module.css';

interface IntroProps {
  state: BootState;
  progress: number;
  currentMessage: string;
  timings: typeof BOOT_TIMINGS;
  handlers: BootHandlers;
}

/**
 * Renders the boot-chrome content for the current FSM state. Flicker1,
 * Flicker2 and Lighting intentionally render nothing here — during those
 * states the portfolio itself, seen through the Overlay, is the visual.
 */
export function Intro({ state, progress, currentMessage, timings, handlers }: IntroProps) {
  if (state === 'Interactive' || state === 'Flicker1' || state === 'Flicker2' || state === 'Lighting') {
    return null;
  }

  return (
    <div className={styles.root}>
      {state === 'Initializing' && (
        <div className={styles.panel}>
          <p className={styles.label}>Initializing...</p>
          <LoadingBar progress={progress} />
          <BootMessages message={currentMessage} />
        </div>
      )}

      {state === 'SystemReady' && <ReadyScreen onReadyClick={handlers.onReadyClick} />}

      {state === 'PoweringOn' && (
        <PoweringOnScreen
          durationMs={timings.poweringOnDurationMs}
          onComplete={handlers.onPowerOnComplete}
        />
      )}
    </div>
  );
}
