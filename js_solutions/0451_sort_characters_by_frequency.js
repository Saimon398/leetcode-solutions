/**
 * @link https://leetcode.com/problems/sort-characters-by-frequency/
 * @description Return the sorted string according to the frequencies of chars
 * appeared in the given string
 * @param {String} str String to be sorted
 * @returns {String}
 */
const frequencySort = (str) => {
  // Find array of frequencies of chars in the string
  const frequency = str.split('')
    .reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return { ...acc };
    }, {});
  // Sort chars according to their frequencies and convert them into a string
  return Object.entries(frequency)
    .sort(([, value1], [, value2]) => value2 - value1)
    .reduce((acc, [char, frequency]) => {
      acc += char.repeat(frequency);
      return acc;
    }, '');
};
