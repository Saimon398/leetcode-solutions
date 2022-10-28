import { describe, test, expect } from '@jest/globals';
import minPathSum from '../js_solutions/0064_minimum_path_sum.js';

describe('Testing "minPathSum" function', () => {
  test('Testing overall perfomance', () => {
    // Should return path to the bottom-right corner with min cost
    expect(minPathSum([[1, 2, 3], [4, 5, 6]])).toEqual(12);
    expect(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toEqual(7);
  });
});
