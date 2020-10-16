import { withIterativeHealthCheck, withRecursiveHealthCheck } from '.';

describe('test healthchecks', () => {
  it('throw errors', () => {
    expect(() =>
      withIterativeHealthCheck((arr) => arr)({} as number[])
    ).toThrowError('the first parameter must be from type array');

    expect(() =>
      withRecursiveHealthCheck((arr) => arr)({} as number[])
    ).toThrowError('the first parameter must be from type array');

    // (future stuff)
    // expect(() =>
    //   withIterativeHealthCheck<string>((arr) => arr)(['1', '2'])
    // ).toThrowError(
    //   'if the first parameter is no number-array you must provide an own comparator'
    // );

    // expect(() =>
    //   withRecursiveHealthCheck<string>((arr) => arr)(['1', '2'])
    // ).toThrowError(
    //   'if the first parameter is no number-array you must provide an own comparator'
    // );
  });

  it('passing the health check', () => {
    expect(withIterativeHealthCheck((arr) => arr)([1, 2])).toEqual([1, 2]);
    expect(withRecursiveHealthCheck((arr) => arr)([1, 2])).toEqual([1, 2]);
  });
});
