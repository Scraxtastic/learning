import type { SortingOptions } from '../__shared/types';
import { withIterativeHealthCheck } from '../__shared/withHealthCheck';
import { numberComparator } from '../__shared/comparators';

const algorithm = (
  array: number[],
  { comparator: optsComparator }: SortingOptions = {}
): number[] => {
  const comparator = optsComparator || numberComparator;
  const re = array.slice();

  // set the end since we moved finished items there after every loop
  for (let i = array.length; i > 1; i--) {
    // go from 0 to the remaining length of the unsorted array and bubble big items up
    for (let j = 0; j < i - 1; j++) {
      if (comparator(re[j], re[j + 1]) === 1)
        [re[j], re[j + 1]] = [re[j + 1], re[j]];
    }
  }

  return re;
};

export const iterative = withIterativeHealthCheck(algorithm);
