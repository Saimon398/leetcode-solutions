/**
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @description Return length of longest substring without repetitions
 * @param {String} string
 * @returns {Number}
 */
const lengthOfLongestSubstring = (string) => {
  let sequence = [];
  let maxLength = 0;

  // Iterate through string
  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];
    // Search index of first occurence in the sequence
    const index = sequence.indexOf(char);
    sequence.push(char);
    // If index is not -1, it means char has already in sequence
    if (index !== -1) {
      sequence = sequence.slice(index + 1);
    }
    // Compare current sequence length with max length
    // If current one is higher, replace max by current one
    const sequenceLength = sequence.length;
    if (sequenceLength > maxLength) {
      maxLength = sequenceLength;
    }
  }

  return maxLength;
};
