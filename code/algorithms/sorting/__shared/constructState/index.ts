import type { Step } from '../stepAnalyzer/types';

export const constructState = <T = number>(
  start: T[],
  incrememts: Array<Step<T>>,
  index: number
): T[] => {
  const re = start.slice();

  for (let i = 0; i < index; i++) {
    const { activeElements } = incrememts[i];

    for (const { index1, index2 } of activeElements)
      [re[index1], re[index2]] = [re[index2], re[index1]];
  }

  return re;
};
