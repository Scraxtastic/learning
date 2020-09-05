import type { SortingOptions, Iterative, Recursive } from '../types';
import { numberComparator } from '../comparators';

/**
 * our iterative implementation health check
 *
 * checks:
 * - is the first parameter an array?
 * - is the comparator given if the type is not number?
 */
export const withIterativeHealthCheck = (algorithm: Iterative) => (
  array: number[],
  opts: SortingOptions = {}
) => {
  // array check
  if (!Array.isArray(array))
    throw Error('the first parameter must be from type array');

  // we don't deal with empty arrays
  if (array.length === 0) return array;

  // check for the type (future stuff)
  // if (array.some((item) => typeof item !== 'number') && !opts.comparator)
  //   throw Error(
  //     'if the first parameter is no number-array you must provide an own comparator'
  //   );

  return algorithm(array, opts);
};

/**
 * our recursive implementation health check
 *
 * checks:
 * - is the first parameter an array?
 * - is the comparator given if the type is not number?
 */
export const withRecursiveHealthCheck = <X = {}>(algorithm: Recursive<X>) => (
  array: number[],
  opts: SortingOptions = {},
  internals?: X
) => {
  // array check
  if (!Array.isArray(array))
    throw Error('the first parameter must be from type array');

  // we don't deal with empty arrays
  if (array.length === 0) return array;

  // check for the type (future stuff)
  // if (array.some((item) => typeof item !== 'number') && !opts.comparator)
  //   throw Error(
  //     'if the first parameter is no number-array you must provide an own comparator'
  //   );

  return algorithm(array, opts, internals);
};
