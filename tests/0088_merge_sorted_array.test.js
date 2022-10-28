import {
  describe, test, expect, beforeEach,
} from '@jest/globals';
import mergeSortedArray from '../js_solutions/0088_merge_sorted_array.js';

describe('Testing "mergeSortedArray" function', () => {
  test('Testing overall perfomance', () => {
    // Should modify nums1 in-place
    expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 6, [2, 5, 6], 3))
      .toEqual(expect.arrayContaining([1, 2, 2, 3, 5, 6]));
    expect(mergeSortedArray([1], 1, [], 0))
      .toEqual(expect.arrayContaining([1]));
  });
});
