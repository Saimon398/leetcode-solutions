/**
 * @link https://leetcode.com/problems/longest-increasing-subsequence/
 * @description Return the length of the longest strictly increasing subsequence
 * @param {Object []} sequence
 * @returns {Object []}
 */
const LIS = (sequence) => {
  const subsequenceLength = new Array(sequence.length).fill(0);

  // Iterate through all nums in sequence and compare
  // each last nums in sequence and subsequence
  for (let i = 0; i < sequence.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      // If last items in two sequences are equal,
      // LIS is increased by 1
      if (sequence[j] < sequence[i] && subsequenceLength[j] > subsequenceLength[i]) {
        subsequenceLength[i] = subsequenceLength[j];
      }
    }
    subsequenceLength[i] += 1;
  }
  return Math.max(...subsequenceLength);
};
