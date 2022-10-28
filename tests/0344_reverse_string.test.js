import { describe, test, expect, beforeEach } from '@jest/globals';
import reverseString from '../js_solutions/0344_reverse_string.js';

let received1;
let received2;

beforeEach(() => {
  received1 = ["H","a","n","n","a","h"];
  received2 = ["h","e","l","l","o"];
})

describe('Testing "reverseString" function', () => {
  test('Testing overall perfomance', () => {
    reverseString(received1);
    reverseString(received2);
    // Should return reversed array of charaters
    expect(received1).toEqual(expect.arrayContaining(["h","a","n","n","a","H"]));
    expect(received2).toEqual(expect.arrayContaining(["o","l","l","e","h"]));
  });
});
