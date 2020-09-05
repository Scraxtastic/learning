/*
 * ------------------------------------------
 * here we can define globals for our tests
 * ------------------------------------------
 */

/**
 * wrapper for your iterative implementation
 *
 * @param text extra text
 * @param callback the function for your test
 */
globalThis.it_iterative = (text: string, callback?: jest.ProvidesCallback) =>
  it(`implementation [iterative] (${text})`, callback);

/**
 * wrapper for your recursive implementation
 *
 * @param text extra text
 * @param callback the function for your test
 */
globalThis.it_recursive = (text: string, callback?: jest.ProvidesCallback) =>
  it(`implementation [recursive] (${text})`, callback);
