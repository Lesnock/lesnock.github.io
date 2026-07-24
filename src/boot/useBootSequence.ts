import { useCallback, useMemo, useReducer } from 'react';
import { bootReducer, INITIAL_BOOT_STATE } from './bootMachine';
import { useLoadingProgress } from './useLoadingProgress';
import { BOOT_TIMINGS, REDUCED_MOTION_SCALE } from './constants';
import { useReducedMotion } from '../hooks/useReducedMotion';
import type { BootEvent, BootHandlers, BootState } from './types';

interface UseBootSequenceResult {
  state: BootState;
  progress: number;
  currentMessage: string;
  reducedMotion: boolean;
  /** Multiplier to apply to any locally-defined animation duration. */
  motionScale: number;
  timings: typeof BOOT_TIMINGS;
  handlers: BootHandlers;
}

export function useBootSequence(): UseBootSequenceResult {
  const [state, dispatch] = useReducer(bootReducer, INITIAL_BOOT_STATE);
  const reducedMotion = useReducedMotion();
  const motionScale = reducedMotion ? REDUCED_MOTION_SCALE : 1;

  const send = useCallback((type: BootEvent['type']) => dispatch({ type } as BootEvent), []);

  const timings = useMemo<typeof BOOT_TIMINGS>(
    () =>
      Object.fromEntries(
        Object.entries(BOOT_TIMINGS).map(([key, value]) => [key, value * motionScale])
      ) as typeof BOOT_TIMINGS,
    [motionScale]
  );

  const { progress, currentMessage } = useLoadingProgress({
    enabled: state === 'Initializing',
    minDurationMs: timings.loadingMinDurationMs,
    maxDurationMs: timings.loadingMaxDurationMs,
    holdMs: timings.loadingCompleteHoldMs,
    onComplete: () => send('LOADING_COMPLETE'),
  });

  const handlers = useMemo<BootHandlers>(
    () => ({
      onReadyClick: () => send('READY_CLICKED'),
      onPowerOnComplete: () => send('POWER_ON_COMPLETE'),
      onFlicker1Complete: () => send('FLICKER_1_COMPLETE'),
      onFlicker2Complete: () => send('FLICKER_2_COMPLETE'),
      onLightingComplete: () => send('LIGHTING_COMPLETE'),
      onOnlineComplete: () => send('ONLINE_COMPLETE'),
    }),
    [send]
  );

  return { state, progress, currentMessage, reducedMotion, motionScale, timings, handlers };
}
