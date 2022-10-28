import { describe, test, expect } from '@jest/globals';
import reverseWords from '../js_solutions/0151_reverse_words_in_a_string.js';

describe('Testing "reverseWords" function', () => {
  test('Testing overall perfomance', () => {
    // Should return reversed string 
    expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
    expect(reverseWords('a good   example')).toEqual('example good a');
    // Can process upper-case letters as well
    expect(reverseWords('camel Case')).toEqual('Case camel');
  });
});
