/**
 * a comparator for numbers
 * returns -1 if a is smaller than b, 1 if a is bigger than b, 0 if they're equal
 *
 * @param a number 1
 * @param b number 2
 */
export const numberComparator = (a: number, b: number) =>
  a < b ? -1 : +(a > b);
