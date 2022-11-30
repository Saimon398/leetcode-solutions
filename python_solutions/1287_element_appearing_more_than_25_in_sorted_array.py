def findSpecialInteger(self, arr: List[int]) -> int:
  # Find 25 % of the given array's length
  quarter = len(arr) // 4
  # Find required element in the given array
  for i in range(len(arr)):
    if(arr[i] == arr[i + quarter]):
      return arr[i]
        