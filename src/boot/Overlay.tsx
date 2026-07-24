import { useEffect } from 'react';
import { LightingEffect } from './LightingEffect';
import type { BootState } from './types';
import type { BOOT_TIMINGS } from './constants';
import styles from './Overlay.module.css';

interface OverlayProps {
  state: BootState;
  timings: typeof BOOT_TIMINGS;
  onFlicker1Complete: () => void;
  onFlicker2Complete: () => void;
  onLightingComplete: () => void;
}

const OPAQUE_STATES: ReadonlySet<BootState> = new Set([
  'Initializing',
  'SystemReady',
  'PoweringOn',
]);

const POWER_STATES: ReadonlySet<BootState> = new Set(['Flicker1', 'Flicker2', 'Lighting']);

/**
 * The blackout layer sitting between the (always-mounted) portfolio and the
 * boot chrome. During Flicker1/Flicker2/Lighting it renders a single div
 * whose opacity is a pure function of the shared --power custom property
 * (animated once on the App root, see App.module.css) — so the darkness
 * never resets between phases, it only ever gets brighter. The three
 * effects below just advance the state machine on their own clock; App's
 * animation is timed to match.
 */
export function Overlay({
  state,
  timings,
  onFlicker1Complete,
  onFlicker2Complete,
  onLightingComplete,
}: OverlayProps) {
  useEffect(() => {
    if (state !== 'Flicker1') return undefined;
    const id = setTimeout(onFlicker1Complete, timings.flicker1DurationMs);
    return () => clearTimeout(id);
  }, [state, timings.flicker1DurationMs, onFlicker1Complete]);

  useEffect(() => {
    if (state !== 'Flicker2') return undefined;
    const id = setTimeout(onFlicker2Complete, timings.flicker2DurationMs);
    return () => clearTimeout(id);
  }, [state, timings.flicker2DurationMs, onFlicker2Complete]);

  useEffect(() => {
    if (state !== 'Lighting') return undefined;
    const id = setTimeout(onLightingComplete, timings.lightingDurationMs);
    return () => clearTimeout(id);
  }, [state, timings.lightingDurationMs, onLightingComplete]);

  if (POWER_STATES.has(state)) {
    return (
      <>
        <div className={styles.blackout}>
          {state === 'Lighting' && <LightingEffect durationMs={timings.lightingDurationMs} />}
        </div>
        <div className={styles.surge} />
      </>
    );
  }

  if (OPAQUE_STATES.has(state)) {
    return <div className={styles.opaque} />;
  }

  return null;
}
