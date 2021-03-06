import type { SortingOptions, BasicInternal } from '../__shared/types';
import type { PushStateOptions } from '../__shared/stepAnalyzer/types';
import { numberComparator } from '../__shared/comparators';
import { withRecursiveHealthCheck } from '../__shared/withHealthCheck';
import { StepAnalyzer } from '../__shared/stepAnalyzer';

interface Internals extends BasicInternal {
  end: number;
}

/**
 * the recursive implementation of the bubblesort
 *
 * @param array the array to sort
 * @param opts sortingoptions
 * @param param2 the internals for the recursion (not settable for users)
 */
const algorithm = (
  array: number[],
  opts: SortingOptions,
  { end, analyzer }: Internals
): number[] => {
  const { comparator: optsComparator, debugger: optsDebugger } = opts;

  // if end is 1 sorting is done
  if (end === 1) {
    if (optsDebugger) optsDebugger(analyzer.getState());

    return array;
  }

  const comparator = optsComparator || numberComparator;
  const re = array.slice(); // intended shallow-only copy

  // go from 0 to the remaining length of the unsorted array and bubble big items up
  for (let j = 0; j < end; j++) {
    const activeElements: PushStateOptions['activeElements'] = [];

    if (comparator(re[j], re[j + 1]) === 1) {
      [re[j], re[j + 1]] = [re[j + 1], re[j]];

      // if swap also swap for our active element debugging
      activeElements.push({ index1: j, index2: j + 1 });
    }

    analyzer.pushState({ activeElements });
  }

  // we call the algorithm again with the end moving towards 0
  return algorithm(re, opts, { end: end - 1, analyzer });
};

/**
 * the exported algorithm with health check and initial internals
 */
export const recursive = withRecursiveHealthCheck<Internals>((array, opts) =>
  algorithm(array, opts || {}, {
    end: array.length,
    analyzer: new StepAnalyzer(),
  })
);
