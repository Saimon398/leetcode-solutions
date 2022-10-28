import { describe, test, expect } from '@jest/globals';
import longestValidParentheses from '../js_solutions/0032_longest_valid_parentheses.js';

describe('Testing "longestValidParentheses" function', () => {
  test('Testing valid parentheses', () => {
    // Should return length of longest valid parentheses
    expect(longestValidParentheses(')()())')).toEqual(4);
    expect(longestValidParentheses('()')).toEqual(2);
  });
  test('Testing invalid parentheses', () => {
    // Should return 0, b/c parentheses is invalid
    expect(longestValidParentheses(')')).toEqual(0);
    expect(longestValidParentheses('')).toEqual(0);
  });
});
