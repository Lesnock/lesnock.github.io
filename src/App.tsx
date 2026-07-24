import { useBootSequence } from './boot/useBootSequence';
import { Intro } from './boot/Intro';
import { Overlay } from './boot/Overlay';
import { BackgroundEffects } from './effects/BackgroundEffects';
import { Portfolio } from './portfolio/Portfolio';
import type { BootState } from './boot/types';
import styles from './App.module.css';

/**
 * States from the first flicker onward — once entered, the power-on
 * animation should be running (transitions are monotonic, so this is safe
 * as a pure derived flag rather than extra state).
 */
const POWERED_STATES: ReadonlySet<BootState> = new Set([
  'Flicker1',
  'Flicker2',
  'Lighting',
  'SystemOnline',
  'Interactive',
]);

function App() {
  const { state, progress, currentMessage, timings, handlers } = useBootSequence();
  const interactive = state === 'Interactive';
  const powering = POWERED_STATES.has(state);
  const powerDurationMs =
    timings.flicker1DurationMs + timings.flicker2DurationMs + timings.lightingDurationMs;

  return (
    <div
      className={`${styles.root} ${powering ? styles.powering : ''}`}
      style={{ '--power-duration': `${powerDurationMs}ms` } as React.CSSProperties}
    >
      <Portfolio interactive={interactive} />
      <Overlay
        state={state}
        timings={timings}
        onFlicker1Complete={handlers.onFlicker1Complete}
        onFlicker2Complete={handlers.onFlicker2Complete}
        onLightingComplete={handlers.onLightingComplete}
      />
      <BackgroundEffects />
      <Intro
        state={state}
        progress={progress}
        currentMessage={currentMessage}
        timings={timings}
        handlers={handlers}
      />
    </div>
  );
}

export default App;
