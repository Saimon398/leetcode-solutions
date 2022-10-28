import { describe, test, expect } from '@jest/globals';
import trap from '../js_solutions/0042_trapping_rain_water.js';

describe('Testing "trap" function', () => {
  test('Possible to trap water in cells', () => {
    // Should return number of water cells trapped
    expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
    expect(trap([4,2,0,3,2,5])).toEqual(9);
  });
  test('Impossible to trap water in cells', () => {
    // Should return 0, b/c there is no place to trap water
    expect(trap([1,1,1,1,1,1,1])).toEqual(0);
    expect(trap([1,1,1,10,1,1,1])).toEqual(0);
  });
});