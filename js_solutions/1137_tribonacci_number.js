/**
 * @link https://leetcode.com/problems/n-th-tribonacci-number/
 * @description Given 'number', return the value of Tribonacci sequence.
 * @param {Number} number 
 * @returns 
 */
const tribonacci = (number) => {
  const storage = new Array(number + 1);
  storage[0] = 0;
  storage[1] = 1;
  storage[2] = 1;

  for(let i = 3; i <= number; i += 1) {
    storage[i] = storage[i - 1] + storage[i - 2] + storage[i - 3];
  }
  return storage[number];
};