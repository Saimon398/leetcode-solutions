import { describe, test, expect } from '@jest/globals';
import isPalindrome from '../js_solutions/0009_palindrome_number.js';

describe('Testing "isPalindrome" function', () => {
  test('Testing true options', () => {
    // Should return true, b/c value is a palindrome
    expect(isPalindrome(121)).toBeTruthy();
    expect(isPalindrome(10001)).toBeTruthy();
  });
  test('Testing false options', () => {
    // Should return false/ b/c value is not a palindrome
    expect(isPalindrome(-121)).toBeFalsy();
    expect(isPalindrome(123)).toBeFalsy();
  });
});
