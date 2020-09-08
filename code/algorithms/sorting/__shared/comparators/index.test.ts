import { numberComparator } from ".";

describe("test comparators", () => {
  it("number comparator works properly", () => {
    expect(numberComparator(1, 2)).toBe(-1);
    expect(numberComparator(2, 1)).toBe(1);
    expect(numberComparator(1, 1)).toBe(0);
  });
});
