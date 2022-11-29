import { describe, test, expect } from '@jest/globals';
import isUgly from '../js_solutions/0263_ugly_number.js';

describe('Testing "isUgly" function', () => {
  test('Testing overall perfomance', () => {
    expect(isUgly(6)).toBeTruthy();
    expect(isUgly(1)).toBeTruthy();
  });
});
