def mySqrt(self, number: int) -> int:
  ans = 0
  sqrt = 0
  e = number
  while(sqrt <= e):
    middle = (sqrt + e) // 2
    if (middle * middle == number):
      return middle
    if (middle * middle < number):
      sqrt = middle + 1
      ans = middle
    else:
      e = middle - 1
        
  return ans
