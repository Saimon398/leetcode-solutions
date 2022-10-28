import { describe, test, expect } from '@jest/globals';
import plusOne from '../js_solutions/0066_plus_one.js';

describe('Testing "plusOne" function', () => {
  test('Testing overall perfomance', () => {
    expect(plusOne([1, 2, 3])).toEqual(expect.arrayContaining([1, 2, 4]));
    expect(plusOne([4, 3, 2, 1])).toEqual(expect.arrayContaining([4, 3, 2, 2]));
    expect(plusOne([9])).toEqual(expect.arrayContaining([1, 0]));
  });
});
