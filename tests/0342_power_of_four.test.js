import { describe, test, expect } from '@jest/globals';
import isPowerOfFour from '../js_solutions/0342_power_of_four.js';

describe('Testing "isPowerOfFour" function', () => {
  test('Testing overall perfomance', () => {
    expect(isPowerOfFour(16)).toBeTruthy();
    expect(isPowerOfFour(5)).toBeFalsy();
    expect(isPowerOfFour(1)).toBeTruthy();
  });
});
