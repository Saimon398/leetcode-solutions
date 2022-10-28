import { describe, test, expect } from '@jest/globals';
import maxProfit from '../js_solutions/0122_best_time_to_buy_and_sell_stocks.js';

describe('Testing "maxProfit" function', () => {
  test('Testing overall perfomance', () => {
    // Should return maximum profit which can be achieved
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
});
