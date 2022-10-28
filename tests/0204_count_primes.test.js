import { describe, test, expect } from '@jest/globals';
import countPrimes from '../js_solutions/0204_count_primes.js';

describe('Testing "countPrimes" function', () => {
  test('Testing overall perfomance', () => {
    // Should return number of primes numbers between 2 and N
    // This function based on sieve of Eratosphene algorithm
    expect(countPrimes(10)).toEqual(4);
    expect(countPrimes(20)).toEqual(8);
    expect(countPrimes(1)).toEqual(0);
  });
});
