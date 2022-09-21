/**
 * @link https://leetcode.com/problems/count-primes/
 * @description Return the number of prime numbers that are strictly less than n.
 * @param {Number} n
 * @param {Number} counter 
 * @returns {Number}
 */
const countPrimes = (number, counter = 0) => {
  // Consider that all indices in array, starting 
  // from 2 are prime numbers
  const primeNumbers = new Array(number).fill(true);
  primeNumbers[0] = primeNumbers[1] = false;
  
  // Iterate through all indices
  for (let i = 2; i < number; i += 1) {
    if(primeNumbers[i]) {
      // If indice is a prime number, mark each
      // indice, which is multiple one of the i
      // as composite one
      for (let j = 2 * i; j < number; j += i) {
        primeNumbers[j] = false;
      }
      // Increment the counter by 1
      counter += 1;
    }
  }
  return counter;
};