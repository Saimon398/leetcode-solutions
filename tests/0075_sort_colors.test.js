import {
  describe, test, expect, beforeEach,
} from '@jest/globals';
import sortColors from '../js_solutions/0075_sort_colors.js';

let received1;
let received2;

beforeEach(() => {
  received1 = [2, 0, 2, 1, 1, 0];
  received2 = [2, 0, 1];
});

describe('Testing "sortColors" function', () => {
  test('Testing overall perfomance', () => {
    sortColors(received1);
    sortColors(received2);
    // Should sort colors in-place with no return new collection
    expect(received1).toEqual(expect.arrayContaining([0, 0, 1, 1, 2, 2]));
    expect(received2).toEqual(expect.arrayContaining([0, 1, 2]));
  });
});
