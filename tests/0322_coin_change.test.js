import { describe, test, expect } from '@jest/globals';
import coinChange from '../js_solutions/0322_coin_change.js';

describe('Testing "coinChange" function', () => {
  test('Testing possible options to pay amount', () => {
    // Should return number of coins to pay certain amount
    expect(coinChange([1,2,5], 11)).toEqual(3);
    expect(coinChange([1,9,22], 31)).toEqual(2);
  });
  test('Testing impossible options to pay amount', () => {
    // Should return number of coins to pay certain amount
    expect(coinChange([2], 3)).toEqual(-1);
    expect(coinChange([3,9], 20)).toEqual(-1);
  });
})