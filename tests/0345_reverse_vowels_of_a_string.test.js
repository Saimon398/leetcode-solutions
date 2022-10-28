import { describe, test, expect } from '@jest/globals';
import reverseVowels from '../js_solutions/0345_reverse_vowels_of_a_string.js';

describe('Testing "reverseVowels" function', () => {
  test('Testing word with vowels', () => {
    // Should return reversed string
    expect(reverseVowels('leetcode')).toEqual('leotcede');
    expect(reverseVowels('reverse')).toEqual('reverse');
  });
  test('Testing word with no vowels', () => {
    // Should return the same word
    expect(reverseVowels('mntd')).toEqual('mntd');
  });
});
