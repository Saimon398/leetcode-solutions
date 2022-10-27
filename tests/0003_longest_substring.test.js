import { describe, test, expect } from '@jest/globals';
import lengthOfLongestSubstring from '../js_solutions/0003_longest_substring.js';

describe('Testing "lengthOfLongestSubstring" function', () => {
  test('Testing with existing string', () => {
    // Should return length of longest subsequence in string
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    expect(lengthOfLongestSubstring("bbbbbb")).toEqual(1);
    expect(lengthOfLongestSubstring("abcdefg")).toEqual(7);
  });
  test('Testing with empty string', () => {
    // Should return 0, b/c string is empty
    expect(lengthOfLongestSubstring("")).toEqual(0);
  })
})