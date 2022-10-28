import { describe, test, expect } from '@jest/globals';
import reverseWords from '../js_solutions/0557_reverse_words_in_a_string_III.js';

describe('Testing "reverseWords" function', () => {
  test('Testing overall perfomance', () => {
    expect(reverseWords("God Ding")).toEqual("doG gniD");
    expect(reverseWords("Let's take LeetCode contest")).toEqual("s'teL ekat edoCteeL tsetnoc");
  });
});