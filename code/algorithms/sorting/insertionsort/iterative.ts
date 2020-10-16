import type { SortingOptions } from '../__shared/types';
import type { PushStateOptions } from '../__shared/stepAnalyzer/types';
import { withIterativeHealthCheck } from '../__shared/withHealthCheck';
import { numberComparator } from '../__shared/comparators';
import { StepAnalyzer } from '../__shared/stepAnalyzer';

/**
 * the iterative implementation of the insertionsort
 *
 * @param array the array to sort
 * @param param1 the sortingOptions
 */
const algorithm = (
  array: number[],
  { comparator: optsComparator, debugger: optsDebugger }: SortingOptions = {}
): number[] => {
  const comparator = optsComparator || numberComparator;
  const re = array.slice(); // intended shallow-only copy
  const analyzer = new StepAnalyzer();

  for (let i = 1; i < re.length; i++) {
    // we can get many actives here
    const activeElements: PushStateOptions['activeElements'] = [];

    // move left while the current item is smaller
    for (let j = i; j > 0 && comparator(re[j], re[j - 1]) < 0; j--) {
      [re[j], re[j - 1]] = [re[j - 1], re[j]];

      activeElements.push({ index1: j, index2: j - 1 });
    }

    analyzer.pushState({ activeElements });
  }

  if (optsDebugger) optsDebugger(analyzer.getState());

  return re;
};

/**
 * the iterative export with health check
 */
export const iterative = withIterativeHealthCheck(algorithm);
