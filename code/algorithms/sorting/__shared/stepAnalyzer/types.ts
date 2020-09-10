/**
 * the options we have when calling analyzer.pushState
 */
export interface PushStateOptions {
  /**
   * the elements which are active in the algorithm this step
   */
  activeElements: Array<{
    /**
     * from index (= index in the prev state)
     */
    index1: number;
    /**
     * to index (= index in the state of this step)
     */
    index2: number;
  }>;
}

/**
 * the interface of a step-element
 */
export interface Step<T> {
  /**
   * the elements which are active in the algorithm this step
   */
  activeElements: PushStateOptions['activeElements'];
}
