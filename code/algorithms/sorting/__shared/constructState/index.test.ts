import { constructState } from '.';
import type { Step } from '../stepAnalyzer/types';

describe('test constructState', () => {
  it('reconstructs state properly', () => {
    const start = [1, 3, 2, 5, 3];
    const states: Step<number>[] = [
      { activeElements: [] },
      { activeElements: [{ index1: 1, index2: 2 }] },
      { activeElements: [] },
      { activeElements: [{ index1: 3, index2: 4 }] },
    ];

    expect(constructState(start, states, 1)).toEqual(start);
    expect(constructState(start, states, 2)).toEqual([1, 2, 3, 5, 3]);
    expect(constructState(start, states, 3)).toEqual([1, 2, 3, 5, 3]);
    expect(constructState(start, states, 4)).toEqual([1, 2, 3, 3, 5]);
  });
});
