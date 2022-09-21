/**
 * @link https://leetcode.com/problems/length-of-last-word/
 * @description Return the length of the last word in the string.
 * @param {String} string
 * @returns {Number}
 */
const lengthOfLastWord = (string) => {
  // Split string by array of words
  const words = string.split(' ');
  const filtered = [];

  // Iterate through the array,
  // remove spaces and filter
  // out empty strings
  for (let i = 0; i < words.length; i += 1) {
    if (words[i] !== '') {
      filtered.push(words[i].trim());
    }
  }

  // Get length of the last word
  const lastWord = filtered[filtered.length - 1];
  return lastWord.length;
};
