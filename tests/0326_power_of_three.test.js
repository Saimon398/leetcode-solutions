import { describe, test, expect } from '@jest/globals';
import isPowerOfThree from '../js_solutions/0326_power_of_three.js';

describe('Testing "isPowerOfThree" function', () => {
  test('Testing overall perfomance', () => {
    expect(isPowerOfThree(27)).toBeTruthy();
    expect(isPowerOfThree(0)).toBeFalsy();
  });
});
