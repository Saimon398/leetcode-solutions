/**
 * @link https://leetcode.com/problems/find-the-difference/
 * @description Return the letter that was added to target.
 * @param {String} str
 * @param {String} target
 * @returns {String}
 */
const findTheDifference = (str, target) => {
  // Build Hash-Table with target chars and their frequencies
  const freq = target
    .split('')
    .reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return { ...acc };
    }, {});
  // Iterate through the string and find the difference in chars
  for (const char of str) {
    freq[char] -= 1;
  }
  const missingChar = Object.entries(freq).reduce((acc, [char, count]) => {
    if (count === 1) {
      acc = char;
    }
    return acc;
  }, '');
  return missingChar;
};
