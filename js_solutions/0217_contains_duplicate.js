/**
 * @link https://leetcode.com/problems/contains-duplicate/
 * @description Return true if any value appears at least twice in the array
 * @param {*} nums
 * @returns
 */
export default (nums) => {
  const numsSeen = new Set();
  for (let i = 0; i < nums.length; i += 1) {
    const currentNum = nums[i];
    if (numsSeen.has(currentNum)) {
      return true;
    }

    numsSeen.add(currentNum);
  }
  return false;
};
