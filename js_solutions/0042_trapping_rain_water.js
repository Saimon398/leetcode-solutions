/**
 * @link https://leetcode.com/problems/trapping-rain-water/
 * @description Given n non-negative integers representing an elevation map
 * where the width of each bar is 1, compute how much water it can trap after raining.
 * (better see an image at the link)
 * @param {Object []} heights 
 * @returns {Number}
 */
const trap = (heights) => {
  const maxes = new Array(heights.length).fill(0);

  let leftMax = 0;
  for(let i = 0; i < heights.length; i += 1) {
    const height = heights[i];
    maxes[i] = leftMax;
    leftMax = Math.max(leftMax, height);
  }

  let rightMax = 0;
  for(let i = heights.length - 1; i >= 0; i -= 1) {
    const height = heights[i];
    const minHeight = Math.min(rightMax, maxes[i]);

    if(height < minHeight) {
      maxes[i] = minHeight - height;
    }
    else {
      maxes[i] = 0;
    }
    rightMax = Math.max(rightMax, height);
  }
  return maxes.reduce((acc, max) => acc += max, 0);
};