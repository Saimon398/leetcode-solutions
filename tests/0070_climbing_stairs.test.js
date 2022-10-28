import { describe, test, expect } from '@jest/globals';
import climbStairs from '../js_solutions/0070_climbing_stairs.js';

describe('Testing "climbingStairs" function', () => {
  test('Testing overall perfomance', () => {
    // Should return number of ways to reach the top
    expect(climbStairs(3)).toEqual(3);
    expect(climbStairs(10)).toEqual(89);
  });
});
