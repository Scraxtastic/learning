import { Insertionsort } from '.';

const { iterative, recursive } = Insertionsort;

describe('test insertionsort', () => {
  it('implementation [iterative]', () => {
    expect(iterative([1, 2, 3])).toEqual([1, 2, 3]);
    expect(iterative([3, 2, 1])).toEqual([1, 2, 3]);
    expect(iterative([2, 3, 1])).toEqual([1, 2, 3]);
  });

  it('implementation [recursive]', () => {
    expect(recursive([1, 2, 3])).toEqual([1, 2, 3]);
    expect(recursive([3, 2, 1])).toEqual([1, 2, 3]);
    expect(recursive([2, 3, 1])).toEqual([1, 2, 3]);
  });

  it('debugger [iterative]', () => {
    const cb = jest.fn();

    iterative([1, 2, 3], { debugger: cb });
    expect(cb.mock.calls.length).toBe(1);
  });

  it('debugger [recursive]', () => {
    const cb = jest.fn();
    recursive([1, 2, 3], { debugger: cb });
    expect(cb.mock.calls.length).toBe(1);
  });
});
