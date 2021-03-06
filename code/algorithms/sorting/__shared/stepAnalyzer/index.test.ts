import { StepAnalyzer } from '.';

describe('test the StepAnalyzer', () => {
  it('initializing works', () => {
    const analyzer = new StepAnalyzer();
    const state = analyzer.getState();

    expect(state.length).toBe(0);
  });

  it('pushing works', () => {
    const analyzer = new StepAnalyzer();

    analyzer.pushState({ activeElements: [{ index1: 0, index2: -100 }] });

    const state = analyzer.getState();

    expect(state.length).toBe(1);
    expect(state[0].activeElements.length).toBe(1);
    expect(state[0].activeElements[0].index1).toBe(0);
    expect(state[0].activeElements[0].index2).toBe(-100);
  });

  it('custom interfaces work', () => {
    const analyzer = new StepAnalyzer<{ test: number }>();

    analyzer.pushState({ test: 4 });

    const state = analyzer.getState();

    expect(state.length).toBe(1);
    expect(state[0].test).toBe(4);
  });
});
