import { describe, test, expect } from '@jest/globals';
import reverse from '../js_solutions/0007_reverse_integer.js';

describe('Testing "reverse" function', () => {
  test('Testing positive values', () => {
    // Should return reversed positive integer
    expect(reverse(123)).toEqual(321);
    expect(reverse(120)).toEqual(21);
  });
  test('Testing negative values', () => {
    // Should return reversed negative integer
    expect(reverse(-123)).toEqual(-321);
    expect(reverse(-140)).toEqual(-41);
  });
  // Here should be testing for number which is out of 32-bit range
});
