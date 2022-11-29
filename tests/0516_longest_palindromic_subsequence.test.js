import { describe, test, expect } from '@jest/globals';
import LPS from '../js_solutions/0516_longest_palindromic_subsequence.js';

describe('Testing "LPS" function', () => {
  test('Testing overall perfomance', () => {
    // One possible longest palindromic subsequence is "bbbb".
    expect(LPS('bbbab')).toEqual(4);
    // One possible longest palindromic subsequence is "bb".
    expect(LPS('cbbd')).toEqual(2);
  });
});
