/**
 * @link https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * @description Reverse the order of characters in each word within a sentence
 * @param {String} string
 * @returns {String}
 */
export default (string) => {
  // Split string into the words
  const words = string.split(' ');
  const newWords = [];

  // Iterate through all words and make new word
  // by going through each word in reverse order
  for (let i = 0; i < words.length; i += 1) {
    let newWord = '';
    for (let k = words[i].length - 1; k >= 0; k -= 1) {
      newWord += words[i][k];
    }
    newWords.push(newWord);
  }
  return newWords.join(' ');
};
