import { describe, test, expect } from '@jest/globals';
import uniquePaths from '../js_solutions/0062_unique_paths.js';

describe('Testing "uniquePaths" function', () => {
  test('Testing overall perfomance', () => {
    // Should return number of unique ways
    expect(uniquePaths(4, 4)).toEqual(20);
    expect(uniquePaths(3, 7)).toEqual(28);
    expect(uniquePaths(1, 1)).toEqual(1);
  });
});
