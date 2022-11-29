import { describe, test, expect } from '@jest/globals';
import missingNumber from '../js_solutions/0268_missing_number.js';

describe('Testing "missingNumber" function', () => {
  test('Testing overall perfomance', () => {
    expect(missingNumber([3, 0, 1])).toEqual(2);
    expect(missingNumber([0, 1])).toEqual(2);
  });
});