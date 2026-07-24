import type { BootEvent, BootState } from './types';

/**
 * Declarative transition table for the boot sequence.
 * Every state advance is driven by an explicit event (user input or an
 * animation/progress completion callback) instead of ad-hoc timers
 * scattered across components.
 */
type TransitionTable = {
  [S in BootState]?: {
    [E in BootEvent['type']]?: BootState;
  };
};

const TRANSITIONS: TransitionTable = {
  Initializing: { LOADING_COMPLETE: 'SystemReady' },
  SystemReady: { READY_CLICKED: 'PoweringOn' },
  PoweringOn: { POWER_ON_COMPLETE: 'Flicker1' },
  Flicker1: { FLICKER_1_COMPLETE: 'Flicker2' },
  Flicker2: { FLICKER_2_COMPLETE: 'Lighting' },
  Lighting: { LIGHTING_COMPLETE: 'SystemOnline' },
  SystemOnline: { ONLINE_COMPLETE: 'Interactive' },
  Interactive: {},
};

export const INITIAL_BOOT_STATE: BootState = 'Initializing';

export function bootReducer(state: BootState, event: BootEvent): BootState {
  return TRANSITIONS[state]?.[event.type] ?? state;
}
