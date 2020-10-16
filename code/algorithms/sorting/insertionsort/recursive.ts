import type { SortingOptions, BasicInternal } from '../__shared/types';
import type { PushStateOptions } from '../__shared/stepAnalyzer/types';
import { numberComparator } from '../__shared/comparators';
import { withRecursiveHealthCheck } from '../__shared/withHealthCheck';
import { StepAnalyzer } from '../__shared/stepAnalyzer';

interface Internals extends BasicInternal {
  start: number;
}

/**
 * the recursive implementation of the insertionsort
 *
 * @param array the array to sort
 * @param opts sortingoptions
 * @param param2 the internals for the recursion (not settable for users)
 */
const algorithm = (
  array: number[],
  opts: SortingOptions,
  { start, analyzer }: Internals
): number[] => {
  const { comparator: optsComparator, debugger: optsDebugger } = opts;

  // if end is 1 sorting is done
  if (start === array.length) {
    if (optsDebugger) optsDebugger(analyzer.getState());

    return array;
  }

  const comparator = optsComparator || numberComparator;
  const re = array.slice(); // intended shallow-only copy

  // we can get many actives here
  const activeElements: PushStateOptions['activeElements'] = [];

  // move left while the current item is smaller
  for (let j = start; j > 0 && comparator(re[j], re[j - 1]) < 0; j--) {
    [re[j], re[j - 1]] = [re[j - 1], re[j]];

    activeElements.push({ index1: j, index2: j - 1 });
  }

  analyzer.pushState({ activeElements });

  // we call the algorithm again with the end moving towards 0
  return algorithm(re, opts, { start: start + 1, analyzer });
};

/**
 * the exported algorithm with health check and initial internals
 */
export const recursive = withRecursiveHealthCheck<Internals>((array, opts) =>
  algorithm(array, opts || {}, {
    start: 1,
    analyzer: new StepAnalyzer(),
  })
);
