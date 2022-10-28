import { describe, test, expect } from '@jest/globals';
import isSubsequence from '../js_solutions/0392_is_subsequence.js';

describe('Testing "isSubsequebce" function', () => {
  test('Testing overall perfomance', () => {
    // Should return true if text is in pattern, otherwise - false
    expect(isSubsequence("abc", "ahbgdc")).toBeTruthy();
    expect(isSubsequence("axc", "ahbgdc")).toBeFalsy();
  });
});