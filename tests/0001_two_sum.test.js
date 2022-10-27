import { describe, test, expect } from '@jest/globals';
import twoSum from '../js_solutions/0001_two_sum.js';

describe('Testing twoSum function', () => {
  test('Testing with different values', () => {
  // Should return indices of the two numbers such that they add up to target.
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
  });
  test('Testing with the same values', () => {
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSum([4, 4], 8)).toEqual(expect.arrayContaining([0, 1]));
  });
  // Should return -1, b/c there is no solution or solution is not the only one
  test('Testing with the absence of solution', () => {
    expect(twoSum([1, 2, 5], 4)).toEqual(-1);
    expect(twoSum([4, 4, 4, 4], 16)).toEqual(-1);
  });
});
