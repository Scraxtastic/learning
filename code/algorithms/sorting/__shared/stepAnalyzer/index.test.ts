import { StepAnalyzer } from '.';

describe('test the StepAnalyzer', () => {
  it('initializing works', () => {
    const analyzer = new StepAnalyzer([1, 2, 3]);
    const state = analyzer.getState();

    expect(state.length).toBe(1);
    expect(state[0].state).toEqual([1, 2, 3]);
    expect(state[0].activeElements.length).toBe(0);
  });

  it('pushing works', () => {
    const analyzer = new StepAnalyzer([1, 2, 3]);

    analyzer.pushState([4], { activeElements: [{ from: 0, to: -100 }] });

    const state = analyzer.getState();

    expect(state.length).toBe(2);
    expect(state[0].state).toEqual([1, 2, 3]);
    expect(state[0].activeElements.length).toBe(0);
    expect(state[1].state).toEqual([4]);
    expect(state[1].activeElements.length).toBe(1);
    expect(state[1].activeElements[0].from).toBe(0);
    expect(state[1].activeElements[0].to).toBe(-100);
  });
});
