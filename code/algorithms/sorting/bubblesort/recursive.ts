import type { SortingOptions } from '../__shared/types';
import { numberComparator } from '../__shared/comparators';
import { withRecursiveHealthCheck } from '../__shared/withHealthCheck';

interface Internals {
  end: number;
}

const algorithm = (
  array: number[],
  opts: SortingOptions,
  { end }: Internals
): number[] => {
  // if end is 1 sorting is done
  if (end === 1) {
    return array;
  }

  const { comparator: propsComparator } = opts;

  const comparator = propsComparator || numberComparator;
  const re = array.slice();

  // go from 0 to the remaining length of the unsorted array and bubble big items up
  for (let j = 0; j < end; j++) {
    if (comparator(re[j], re[j + 1]) === 1)
      [re[j], re[j + 1]] = [re[j + 1], re[j]];
  }

  // we call the algorithm again with the end moving towards 0
  return algorithm(re, opts, { end: end - 1 });
};

export const recursive = withRecursiveHealthCheck<Internals>((array, opts) =>
  algorithm(array, opts, { end: array.length })
);
