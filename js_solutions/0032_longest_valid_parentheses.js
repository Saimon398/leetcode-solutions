/**
 * @link https://leetcode.com/problems/longest-valid-parentheses/
 * @description Find the length of the longest valid (well-formed) parentheses substring.
 * @param {String} str
 * @returns {Number}
 */
const longestValidParentheses = (string) => {
  const stack = [];
  const counter = new Array(string.length).fill(-Infinity);

  for (let i = 0; i < string.length; i += 1) {
    const bracket = string[i];

    if (bracket === ')' && string[stack[stack.length - 1]] === '(') {
      counter[i] = 1;
      counter[stack[stack.length - 1]] = 1;
      stack.pop();
    } else {
      stack.push();
    }
  }

  for (let i = 1; i < string.length; i += 1) {
    counter[i] = Math.max(counter[i], counter[i] + counter[i - 1]);
  }
  counter.push(0);

  return Math.max(...counter);
};
