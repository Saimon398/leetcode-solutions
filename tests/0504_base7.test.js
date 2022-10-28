import { describe, test, expect } from '@jest/globals';
import base7 from '../js_solutions/0504_base7.js';

describe('Testing "base7" function', () => {
  test('Testing perfomance overall', () => {
    // Should return stringified number with base equals 7
    expect(base7(100)).toEqual('202');
    expect(base7(145)).toEqual('265');
  });
});