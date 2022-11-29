def singleNumber(self, nums: List[int]) -> int:
  uniqueNumber = 0
  # Use XOR bitwise operation for every num in the array
  for i in range(len(nums)):
      uniqueNumber ^= nums[i]
  return uniqueNumber