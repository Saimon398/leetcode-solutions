def isPowerOfTwo(self, n: int) -> bool:
  # Here bitwise operation is used (specifically AND)
  return n > 0 and (n & n - 1) == 0