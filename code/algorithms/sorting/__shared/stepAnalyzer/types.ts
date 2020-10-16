/**
 * the elements which are active in the algorithm this step
 */
export interface ActiveElement {
  /**
   * from index (= index in the prev state)
   */
  index1: number;
  /**
   * to index (= index in the state of this step)
   */
  index2: number;
}

/**
 * the options we have when calling analyzer.pushState
 */
export interface PushStateOptions<T = {}> {
  activeElements: ActiveElement[];
}

/**
 * the interface of a step-element
 */
export interface Step {
  /**
   * the elements which are active in the algorithm this step
   */
  activeElements: ActiveElement[];
}
