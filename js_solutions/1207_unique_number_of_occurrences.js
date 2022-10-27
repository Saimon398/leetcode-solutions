/**
 * @link https://leetcode.com/problems/unique-number-of-occurrences/
 * @description  return true if the number of occurrences of each value
 * in the array is unique, or false otherwise.
 * @param {Object []} collection
 * @returns {Boolean}
 */
const uniqueOccurrences = (collection) => {
  // Build hash map, where the values of collection items
  // are number of occurences
  const hashMap = collection
    .reduce((acc, item) => {
      acc[item] = (acc[item] + 1) || 1;
      return { ...acc };
    }, {});
  // Declare set b/c it contains only unique values
  const set = new Set(Object.values(hashMap));
  // Compare sizes of set and array with the same values
  return set.size === Object.values(hashMap).length;
};
