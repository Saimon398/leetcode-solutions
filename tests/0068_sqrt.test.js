import { describe, test, expect } from '@jest/globals';
import sqrt from '../js_solutions/0068_sqrt.js';

describe('Testing "sqrt" function', () => {
  test('Testing overall perfomance', () => {
    // Should return square root of non-negative integer
    expect(sqrt(4)).toEqual(2);
    expect(sqrt(8)).toEqual(2);
    expect(sqrt(0)).toEqual(0);
  });
});
