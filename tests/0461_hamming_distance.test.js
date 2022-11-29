import { describe, test, expect } from '@jest/globals';
import hammingDistance from '../js_solutions/0461_hamming_distance.js';

describe('Testing "hammingDistance" function', () => {
  test('Testing overall perfomance', () => {
    expect(hammingDistance(1, 4)).toEqual(2);
    expect(hammingDistance(3, 1)).toEqual(1);
  });
});
