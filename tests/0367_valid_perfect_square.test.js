import { describe, test, expect } from '@jest/globals';
import validPerfectSquare from '../js_solutions/0367_valid_perfect_square.js';

describe('Testing "validPerfectSquare" function', () => {
  test('Testing overall perfomance', () => {
    expect(validPerfectSquare(16)).toBeTruthy();
    expect(validPerfectSquare(14)).toBeFalsy();
  });
});
