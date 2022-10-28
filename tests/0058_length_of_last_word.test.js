import { describe, test, expect } from '@jest/globals';
import lengthOfLastWord from '../js_solutions/0058_length_of_last_word.js';

describe('Testing "lengthOfLastWord" function', () => {
  test('Testing overall perfomance', () => {
    // Should return length of last word in string
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toEqual(4);
    expect(lengthOfLastWord('luffy is still joyboy')).toEqual(6);
    expect(lengthOfLastWord('')).toEqual(0);
  });
});
