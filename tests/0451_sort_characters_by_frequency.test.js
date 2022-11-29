import { describe, test, expect } from '@jest/globals';
import frequencySort from '../js_solutions/0451_sort_characters_by_frequency.js';

describe('Testing "frequencySort" function', () => {
  test('Testing overall perfomance', () => {
    expect(frequencySort('tree')).toEqual('eetr');
    expect(frequencySort('dreezy')).toEqual('eedrzy');
  });
});
