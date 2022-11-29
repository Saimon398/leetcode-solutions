import { describe, test, expect } from '@jest/globals';
import averageValue from '../js_solutions/2455_average_value_of_even_numbers_that_are_divisible_by_three.js';

describe('Testing "averageValue" function', () => {
  test('Testing overall perfomance', () => {
    expect(averageValue([1, 3, 6, 10, 12, 15])).toEqual(9);
    expect(averageValue([1, 2, 4, 7, 10])).toEqual(0);
  });
});
