# how to contribute

1. check out some sorting algorithm somewhere (preferred would be a wikipedia link)
1. create a new folder with the following files
   - `recursive.ts`: your recursive implementation of the algorithm
   - `iterative.ts`: your iterative implementation of the algorithm
   - `index.ts`: your exported algorithm as object including the implementations above
   - `index.test.ts`: some unit tests for your algorithm to see if it works properly

# important notes to take

- link the algorithm! in the `index.ts`
- you don't export recursive the recursive or iterative algorithm without healthcheck wrapper (you do it like this: `export const iterative = withIterativeHealthCheck(algorithm)`)
- program test-driven (check out `jest.setup.ts` for helper test-wrappers in jest)
- if you need a new shared functionality add it to `__shared`
