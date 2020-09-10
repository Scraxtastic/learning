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
  constructor() {
    this.#steps.push({ activeElements: [] });
  }

  /**
   * push a new state into the steps
   * @param state the current array
   * @param param yes
   */
  pushState({ activeElements }: PushStateOptions) {
    this.#steps.push({ activeElements });
  }

  /**
   * get a copy of the current steps-state
   */
  getState(): Array<Step<T>> {
    return deepClone(this.#steps);
  }
}
