import { describe, test, expect } from '@jest/globals';
import containsDuplicate from '../js_solutions/0217_contains_duplicate.js';

describe('Testing "containsDuplicate" function', () => {
  test('Testing overall perfomance', () => {
    // Should return true or false depending on duplicate presence 
    expect(containsDuplicate([1,2,3,1])).toBeTruthy();
    expect(containsDuplicate([1,2,3,4])).toBeFalsy();
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBeTruthy();
  });
});