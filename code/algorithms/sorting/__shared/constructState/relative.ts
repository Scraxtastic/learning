import type { Step } from '../stepAnalyzer/types';

/**
 * the relative reconstructor for state + incremental changes
 *
 * @param start the array to start with/from
 * @param incrememts the array of incremental changes
 * @param destIndex the destinated incremental change index
 * @param startIndex the current incremental change index
 */
export const relative = <T = number>(
  start: T[],
  incrememts: Array<Step>,
  destIndex: number,
  startIndex: number
): T[] => {
  if (destIndex < 0 || destIndex > incrememts.length)
    throw Error('destIndex out of bounds');

  if (startIndex < 0 || startIndex > incrememts.length)
    throw Error('startIndex out of bounds');

  if (startIndex === destIndex) return start;

  const re = start.slice();

  if (startIndex > destIndex) {
    for (let i = startIndex; i > destIndex; i--) {
      const { activeElements } = incrememts[i];

      for (const { index1, index2 } of activeElements)
        [re[index1], re[index2]] = [re[index2], re[index1]];
    }

    return re;
  }

  for (let i = 0; i < destIndex; i++) {
    const { activeElements } = incrememts[i];

    for (const { index1, index2 } of activeElements)
      [re[index1], re[index2]] = [re[index2], re[index1]];
  }

  return re;
};
