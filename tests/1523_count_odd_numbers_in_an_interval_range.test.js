import { describe, test, expect } from '@jest/globals';
import countOdds from '../js_solutions/1523_count_odd_numbers_in_an_interval_range';

describe('Testing "countOdds" function', () => {
  test('Testing overall perfomance', () => {
    expect(countOdds(3, 7)).toEqual(3);
    expect(countOdds(8, 10)).toEqual(1);
  });
});
