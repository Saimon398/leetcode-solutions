/**
 * @link https://leetcode.com/problems/reverse-words-in-a-string/
 * @description reverse the order of the words.
 * @param {String} string
 * @returns {String}
 */
const reverseWords = (string) => {
  // Split string into words
  const words = string.split(' ');
  const normalizedWords = [];

  // Iterate through all words and in reverse order
  // and remove spaces in each word
  for (let i = words.length - 1; i >= 0; i -= 1) {
    if (words[i] !== '') {
      normalizedWords.push(words[i].trim());
    }
  }
  return normalizedWords.join(' ');
};
