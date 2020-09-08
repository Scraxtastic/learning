import { Bubblesort } from '.';

const { iterative, recursive } = Bubblesort;

describe('test bubblesort', () => {
  globalThis.it_iterative('', () => {
    expect(iterative([1, 2, 3])).toEqual([1, 2, 3]);
    expect(iterative([3, 2, 1])).toEqual([1, 2, 3]);
    expect(iterative([2, 3, 1])).toEqual([1, 2, 3]);
  });

  globalThis.it_recursive('', () => {
    expect(recursive([1, 2, 3])).toEqual([1, 2, 3]);
    expect(recursive([3, 2, 1])).toEqual([1, 2, 3]);
    expect(recursive([2, 3, 1])).toEqual([1, 2, 3]);
  });

  globalThis.it_iterative('debugger', () => {
    const cb = jest.fn();

    iterative([1, 2, 3], { debugger: cb });
    expect(cb.mock.calls.length).toBe(1);
  });

  globalThis.it_recursive('debugger', () => {
    const cb = jest.fn();
    recursive([1, 2, 3], { debugger: cb });
    expect(cb.mock.calls.length).toBe(1);
  });
});
