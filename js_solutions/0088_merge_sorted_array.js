/**
 * @link https://leetcode.com/problems/merge-sorted-array/
 * @description Merge nums1 and nums2 into a single array
 * sorted in non-decreasing order.
 * @param {Object []} nums1
 * @param {Number} m
 * @param {Object []} nums2
 * @param {Number} n
 */
const mergeSortedArray = (nums1, m, nums2, n) => {
  // Iterate through both of the given arrays simultaneously
  while (m > 0 && n > 0) {
    const curr1 = nums1[m - 1];
    const curr2 = nums2[n - 1];

    if (curr1 >= curr2) {
      nums1[(m + n) - 1] = curr1;
      m -= 1;
    } else { // curr_2 > curr_1
      nums1[(m + n) - 1] = curr2;
      n -= 1;
    }
  }
  // If there are smaller elements left in nums2, copy them over.
  // No need to do this for leftover num1 elements, since we're
  // merging into nums1 and the elements will already be there.
  while (n > 0) {
    nums1[n - 1] = nums2[n - 1];
    n -= 1;
  }
  return nums1;
};
