import type { Step, PushStateOptions } from './types';
import { deepClone } from '../deepClone';

/**
 * the algorithm step analyzer
 */
export class StepAnalyzer<T = number> {
  /**
   * our single steps in a private array
   */
  #steps: Array<Step<T>> = [];

  /**
   * @param state the initial state
   */
  constructor(state: T[]) {
    this.#steps.push({ state, activeElements: [] });
  }

  /**
   * push a new state into the steps
   * @param state the current array
   * @param param yes
   */
  pushState(state: T[], { activeElements }: PushStateOptions) {
    this.#steps.push({ state, activeElements });
  }

  /**
   * get a copy of the current steps-state
   */
  getState(): Array<Step<T>> {
    return deepClone(this.#steps);
  }
}
