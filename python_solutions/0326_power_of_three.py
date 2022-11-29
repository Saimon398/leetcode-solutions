def isPowerOfThree(self, n: int) -> bool:
  # Iterate till 1 is reached 
  while (n > 1):
    n /= 3
  return n == 1