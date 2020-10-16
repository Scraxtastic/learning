import type { Step } from './stepAnalyzer/types';
import { StepAnalyzer } from './stepAnalyzer';

/**
 * a null-version of ?
 */
export type Nullable<T> = T | null;

/**
 * a generous interface for recursive internals to extend
 */
export interface BasicInternal<T = Step> {
  analyzer: StepAnalyzer<T>;
}

/**
 * a general generous comparator callback
 */
export type Comparator<T> = (a: T, b: T) => number;

/**
 * our sorting options as user (T is future yet)
 */
export type SortingOptions<T = number> = Partial<{
  /**
   * a custom comparator for non-numberous arrays mainly
   */
  comparator: Comparator<T>;
  /**
   * a debugger callback to reach a detailed path of the algorithm
   */
  debugger: <T = Step>(array: Array<T>) => any;
}>;

/**
 * the type of an iterative function
 *
 * @param array the input array to sort
 * @param opts options which can be considered while sorting
 */
export type Iterative = (array: number[], opts?: SortingOptions) => number[];

/**
 * the type of a recursive function
 *
 * @param array the input array to sort
 * @param opts options which can be considered while sorting
 * @param internals (set by the function itself, some states which could be required to pass between recursions)
 */
export type Recursive<X = {}> = (
  array: number[],
  opts?: SortingOptions,
  internals?: X
) => number[];
