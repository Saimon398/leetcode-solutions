import { describe, test, expect } from '@jest/globals';
import findSpecialInteger from '../js_solutions/1287_element_appearing_more_than_25_in_sorted_array.js';

describe('Testing "findSpecialInteger" function', () => {
  test('Testing overall perfomance', () => {
    expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])).toEqual(6);
    expect(findSpecialInteger([1, 1])).toEqual(1);
  });
});
