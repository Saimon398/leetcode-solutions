import { describe, test, expect } from '@jest/globals';
import isValid from '../js_solutions/0020_valid_parentheses.js';

describe('Testing "isValid" function', () => {
  test('Testing true options', () => {
    // Should return true, b/c sequence is correct
    expect(isValid('()()(())')).toBeTruthy();
    expect(isValid('(){()}[]')).toBeTruthy();
    expect(isValid('[](){}')).toBeTruthy();
  });
  test('Testing false options', () => {
    // Should return false, b/c sequence is incorrect
    expect(isValid(')')).toBeFalsy();
    expect(isValid('()}')).toBeFalsy();
    expect(isValid('()[}')).toBeFalsy();
    expect(isValid('[')).toBeFalsy();
    expect(isValid('()((())]')).toBeFalsy();
  });
});
