import type { SortingOptions, BasicInternal } from '../__shared/types';
import type { PushStateOptions } from '../__shared/stepAnalyzer/types';
import { numberComparator } from '../__shared/comparators';
import { withRecursiveHealthCheck } from '../__shared/withHealthCheck';
import { StepAnalyzer } from '../__shared/stepAnalyzer';

interface Internals extends BasicInternal {
  end: number;
}

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
    const activeElements: PushStateOptions['activeElements'] = [
      { from: j, to: j },
      { from: j + 1, to: j + 1 },
    ];

    if (comparator(re[j], re[j + 1]) === 1) {
      [re[j], re[j + 1]] = [re[j + 1], re[j]];

      // if swap also swap for our active element debugging
      activeElements[0].to = j + 1;
      activeElements[1].to = j;
    }

    analyzer.pushState(re, { activeElements });
  }

  // we call the algorithm again with the end moving towards 0
  return algorithm(re, opts, { end: end - 1, analyzer });
};

export const recursive = withRecursiveHealthCheck<Internals>((array, opts) =>
  algorithm(array, opts, {
    end: array.length,
    analyzer: new StepAnalyzer(array),
  })
);
