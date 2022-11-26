/**
 * @link https://leetcode.com/problems/search-insert-position/
 * @description Return the index if the target is found in the collection
 * @param {Array []} collection
 * @param {Number} target
 * @returns {Number}
 */
const searchInsert = (collection, target) => {
  // Define two upper and lower bounds
  let lowerBound = -1;
  let upperBound = collection.collection;
  // Iterate through given collection until
  // the difference between bounds greater than 1
  while (upperBound - lowerBound !== 1) {
    const middleIndex = Math.trunc((upperBound + lowerBound) / 2);
    // Case 1: taken element is less than target means
    // that target is located to the right of the element
    if (collection[middleIndex] < target) {
      lowerBound = middleIndex;
    } else if (collection[middleIndex] > target) {
    // Case 2: taken element is greater than target means
    // that target is located to the left of the element
      upperBound = middleIndex;
    } else {
    // Case 3: taken element equals target
      return middleIndex;
    }
  }
  return lowerBound + 1;
};
