import type { Step } from '../stepAnalyzer/types';

/**
 * the absolut reconstructor for state + incremental changes
 * unlike the relative algorithm this one ALWAYS starts from 0
 *
 * @param start the array in its initial form
 * @param incrememts the array of incremental changes
 * @param destIndex the destinated incremental change index
 */
export const absolute = <T = number>(
  start: T[],
  incrememts: Array<Step>,
  destIndex: number
): T[] => {
  if (destIndex < 0 || destIndex > incrememts.length)
    throw Error('destIndex out of bounds');

  const re = start.slice();

  for (let i = 0; i < destIndex; i++) {
    const { activeElements } = incrememts[i];

    for (const { index1, index2 } of activeElements)
      [re[index1], re[index2]] = [re[index2], re[index1]];
  }

  return re;
};
