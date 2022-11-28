/**
 * @link https://leetcode.com/problems/power-of-four/
 * @description Given an integer num
 * Return true if it is a power of four. Otherwise, return false.
 * @param {Number} num Number to be checked
 * @returns {Boolean}
 * @example
 * isPowerOfFour(16); // => true
 *
 * Explanation:
 * num = 16 = 10000
 * num - 1 = 15 = 01111
 * num & (num - 1) = 10000 AND 01111 => 0 and 16 % 3 => 1
 */
const isPowerOfFour = (num) => (num & num - 1) === 0 && num % 3 === 1;
