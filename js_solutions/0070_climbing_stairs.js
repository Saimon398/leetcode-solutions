/**
 * @link https://leetcode.com/problems/climbing-stairs/
 * @description In how many distinct ways can you climb to the top
 * Each time you can climnb either 1 or 2 steps
 * @param {Number} numberOfStairs Number of stairs
 * @returns {Number}
 */
 const climbStairs = function (numberOfStairs) {
  const waysToClimb = new Array(numberOfStairs + 1).fill(0);
  waysToClimb[0] = 0;
  waysToClimb[1] = 1;
  waysToClimb[2] = 2;
  for (let i = 3; i < numberOfStairs + 1; i += 1) {
    waysToClimb[i] = waysToClimb[i - 2] + waysToClimb[i - 1];
  }
  return waysToClimb[numberOfStairs];
};
