/**
 * @link https://leetcode.com/problems/contains-duplicate/
 * @description Return true if any value appears at least twice in the array
 * @param {*} nums 
 * @returns 
 */
const containsDuplicate = (nums) => {
  const numsSeen = new Set();
  for (const currentNum of nums) {
      if(numsSeen.has(currentNum)) {
          return true;
      }
      else {
          numsSeen.add(currentNum);
      }
  }
  return false;
};
