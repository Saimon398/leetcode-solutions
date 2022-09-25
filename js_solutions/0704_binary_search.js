/**
 * @description Return left border in binary search
 * @param {Object []} collection 
 * @param {Number} target 
 * @returns {Number}
 */
const leftBorder = (collection, target) => {
  let left = -1;
  let right = collection.length;

  while (right - left > 1) {
    const middle = Math.trunc((left + right) / 2);
    if (collection[middle] < target) {
      left = middle;
    }
    else { // collection[middle] >= target
      right = middle;
    }
  }
  return left;
};
/**
 * @description Return right border in binary search
 * @param {Object []} collection 
 * @param {Number} target 
 * @returns {Number}
 */
const rightBorder = (collection, target) => {
  let left = -1;
  let right = collection.length;
  while (right - left > 1) {
    const middle = Math.trunc((left + right) / 2);
    if (collection[middle] > target) {
      right = middle;
    }
    else { // collection[middle] >= target
      left = middle;
    }
  }
  return right;
};
/**
 * @link https://leetcode.com/problems/binary-search/
 * @description write a function to search target in nums. 
 * If target exists, then return its index. Otherwise, return -1.
 * @param {Object []} collection 
 * @param {Number} target 
 * @returns 
 */
const binarySearch = (collection, target) => {
  const leftBoundary = leftBorder(collection, target);
  const rightBondary = rightBorder(collection, target);
  if(rightBondary - leftBoundary === 1) {
    return -1;
  }
  return leftBoundary + 1;
};
