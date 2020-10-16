import type { Step } from './types';
import { deepClone } from '../deepClone';

/**
 * the algorithm step analyzer
 */
export class StepAnalyzer<T = Step> {
  /**
   * our single steps in a private array
   */
  #steps: T[] = [];

  /**
   * push a new state into the steps
   *
   * @param state the current array
   * @param param yes
   */
  pushState(opts: T) {
    this.#steps.push(opts);
  }

  /**
   * get a copy of the current steps-state
   */
  getState() {
    return deepClone(this.#steps);
  }
}
