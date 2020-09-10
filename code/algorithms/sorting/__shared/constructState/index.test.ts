import type { Step } from '../stepAnalyzer/types';
import { constructState } from '.';

const { relative, absolute } = constructState;

describe('test constructState', () => {
  it('reconstructs state properly (absolute reconstruction)', () => {
    const start = [1, 3, 2, 5, 3];
    const states: Step<number>[] = [
      { activeElements: [] },
      { activeElements: [{ index1: 1, index2: 2 }] },
      { activeElements: [] },
      { activeElements: [{ index1: 3, index2: 4 }] },
    ];

    expect(absolute(start, states, 1)).toEqual(start);
    expect(absolute(start, states, 2)).toEqual([1, 2, 3, 5, 3]);
    expect(absolute(start, states, 3)).toEqual([1, 2, 3, 5, 3]);
    expect(absolute(start, states, 4)).toEqual([1, 2, 3, 3, 5]);
  });

  it('reconstructs state properly (relative reconstruction)', () => {
    const start = [1, 2, 3, 4, 5];
    const states: Step<number>[] = [
      { activeElements: [] },
      { activeElements: [{ index1: 3, index2: 4 }] },
      { activeElements: [{ index1: 2, index2: 3 }] },
    ];

    expect(relative(start, states, 0, 2)).toEqual([1, 2, 4, 5, 3]);
    expect(relative(start, states, 1, 2)).toEqual([1, 2, 4, 3, 5]);
  });

  it('absolute reconstruction errors', () => {
    expect(() => absolute([], [], -1)).toThrowError('destIndex out of bounds');
    expect(() => absolute([], [], 1)).toThrowError('destIndex out of bounds');
  });

  it('relative reconstruction errors', () => {
    expect(() => relative([], [], -1, 0)).toThrowError(
      'destIndex out of bounds'
    );
    expect(() => relative([], [], 1, 0)).toThrowError(
      'destIndex out of bounds'
    );
    expect(() => relative([], [], 0, -1)).toThrowError(
      'startIndex out of bounds'
    );
    expect(() => relative([], [], 0, 1)).toThrowError(
      'startIndex out of bounds'
    );
  });
});
