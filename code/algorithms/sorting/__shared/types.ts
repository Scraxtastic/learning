export type Comparator<T> = (a: T, b: T) => number;

/**
 * our sorting options as user (T is future yet)
 */
export type SortingOptions<T = number> = Partial<{
  /**
   * a custom comparator for non-numberous arrays mainly
   */
  comparator: Comparator<T>;
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
