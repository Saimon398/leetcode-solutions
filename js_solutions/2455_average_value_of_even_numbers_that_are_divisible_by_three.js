/**
 * @link https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/
 * @description Given an integer array nums of positive integers
 * Return the average value of all even integers that are divisible by 3.
 * @param {Array []} nums
 * @returns {Number}
 */
const averageValue = (nums) => {
  const filteredNums = nums
  // Even numbers and divisible by 3
    .filter((num) => num % 2 === 0 && num % 3 === 0);
  // Length of filteredNums
  const { length } = filteredNums;
  // Length equals 0 - average is 0
  if (length === 0) {
    return 0;
  }
  // Find an average value
  const averageValue = Math.floor(filteredNums.reduce((average, num) => average += num, 0) / length);
  return averageValue;
};
