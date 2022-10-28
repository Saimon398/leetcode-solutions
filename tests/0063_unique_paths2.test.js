import { describe, test, expect } from '@jest/globals';
import uniquePaths from '../js_solutions/0063_unique_paths2.js';

describe('Testing "uniquePaths" function', () => {
  test('Testing overall perfomance', () => {
    // Should return number of unique paths not leading through obstacles
    expect(uniquePaths([[0,0,0],[0,1,0],[0,0,0]])).toEqual(2);
    expect(uniquePaths([[0,1],[0,0]])).toEqual(1);
  });
});
