import type { SortingOptions } from '../__shared/types';
import type { PushStateOptions } from '../__shared/stepAnalyzer/types';
import { withIterativeHealthCheck } from '../__shared/withHealthCheck';
import { numberComparator } from '../__shared/comparators';
import { StepAnalyzer } from '../__shared/stepAnalyzer';

const algorithm = (
  array: number[],
  { comparator: optsComparator, debugger: optsDebugger }: SortingOptions = {}
): number[] => {
  const comparator = optsComparator || numberComparator;
  const re = array.slice(); // intended shallow-only copy
  const steps = new StepAnalyzer(array);

  // set the end since we moved finished items there after every loop
  for (let i = array.length; i > 1; i--) {
    // go from 0 to the remaining length of the unsorted array and bubble big items up
    for (let j = 0; j < i - 1; j++) {
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

      // important to push a copy and not the original
      steps.pushState(re.slice(), { activeElements });
    }
  }

  if (optsDebugger) optsDebugger(steps.getState());

  return re;
};

export const iterative = withIterativeHealthCheck(algorithm);
