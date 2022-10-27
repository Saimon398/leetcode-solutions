import { describe, test, expect } from '@jest/globals';
import reverse from '../js_solutions/0007_reverse_integer.js';

describe('Testing "reverse" function', () => {
  test('Testing positive values', () => {
    expect(reverse(123)).toEqual(321);
    expect(reverse(120)).toEqual(21);
  });
  test('Testing negative values', () => {
    expect(reverse(-123)).toEqual(-321);
    expect(reverse(-140)).toEqual(-41);
  });
})