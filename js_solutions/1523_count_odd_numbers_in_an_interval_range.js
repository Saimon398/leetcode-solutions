/**
 * @link https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
 * @description Return the count of odd numbers between low and high (inclusive).
 * @param {Number} low
 * @param {Number} high
 * @returns {Number}
 */
const countOdds = (low, high) => {
  let count = 0;
  for (let i = low; i <= high; i += 1) {
    count += i % 2 === 1 ? 1 : 0;
  }
  return count;
};
