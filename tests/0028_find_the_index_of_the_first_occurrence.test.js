import { describe, test, expect } from '@jest/globals';
import strStr from '../js_solutions/0028_find_the_index_of_the_first_occurrence.js';

describe('Testing "strStr" function', () => {
  test('Text is in pattern', () => {
    // Should return first indice, b/c text is in pattern
    expect(strStr('rate', 'ate')).toEqual(1);
    expect(strStr('needle', 'need')).toEqual(0);
    expect(strStr('abaabacda', 'ba')).toEqual(1);
  });
  // Should return -1, b/c text is not in a pattern
  test('Text is not in a pattern', () => {
    expect(strStr('paris', 'me')).toEqual(-1);
    expect(strStr('london', 'me')).toEqual(-1);
  });
});
