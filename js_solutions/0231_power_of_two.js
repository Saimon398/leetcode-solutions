/**
 * @link https://leetcode.com/problems/power-of-two/
 * @description Return true if num is a power of two. Otherwise, return false.
 * @param {Number} num
 * @returns {Boolean}
 * @example
 * isPowerOfTwo(16); // => true
 *
 * Explanation:
 * num = 16 = 10000
 * num - 1 = 15 = 01111
 * num & (num - 1) = 10000 AND 01111 => 0
 *
 */
const isPowerOfTwo = (num) => num > 0 && (num & num - 1) === 0;
