import { describe, test, expect } from '@jest/globals';
import findMaximumXOR from '../js_solutions/0421_maximum_xor_of_two_numbers_in_an_array';

describe('Testing "findMaximumXOR" function', () => {
  test('Testing overall perfomance', () => {
    expect(findMaximumXOR([3, 10, 5, 25, 2, 8])).toEqual(28);
    expect(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70])).toEqual(127);
  });
});
