def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
  """
  Do not return anything, modify nums1 in-place instead.
  """
  # Iterate through both of the given arrays simultaneously
  while (m > 0 and n > 0):
    curr1 = nums1[m - 1]
    curr2 = nums2[n - 1]
            
    if(curr1 >= curr2):
      nums1[(m + n) - 1] = curr1
      m -= 1
    else:
      nums1[(m + n) - 1] = curr2
      n -= 1
  # If there are smaller elements left in nums2, copy them over
  # No need to do this for leftover nums1 elements, since we are
  # merging into nums1 and the elements will already be there
  while (n > 0):
    nums1[n - 1] = nums2[n - 1]
    n -= 1
        
  return nums1