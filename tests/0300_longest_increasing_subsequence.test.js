import { describe, test, expect } from '@jest/globals';
import LIS from '../js_solutions/0300_longest_increasing_subsequence.js';

describe('Testing "LIS" function', () => {
  test('Testing overall perfomance', () => {
    // Should return length of longest increasing subsequence
    expect(LIS([10,9,2,5,3,7,101,18])).toEqual(4);
    expect(LIS([0,1,0,3,2,3])).toEqual(4);
    expect(LIS([7,7,7,7,7,7,7])).toEqual(1);
    expect(LIS([5, 4, 3, 2, 1])).toEqual(1);
  });
});