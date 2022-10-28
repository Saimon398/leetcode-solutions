/**
 * @link https://leetcode.com/problems/reverse-vowels-of-a-string/
 * @description Given a string s, reverse only
 * all the vowels in the string and return it.
 * @param {String} string
 * @returns {String}
 */
export default (string) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const letters = string.split('');

  const vowelsInString = letters.filter((letter) => vowels.has(letter.toLowerCase()));
  let vowelIndex = vowelsInString.length - 1;

  const result = letters.map((letter) => {
    if (vowels.has(letter.toLowerCase())) {
      const replacedLetter = vowelsInString[vowelIndex];
      vowelIndex -= 1;
      return replacedLetter;
    }
    return letter;
  })
    .join('');

  return result;
};
