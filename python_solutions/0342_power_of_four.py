def isPowerOfFour(self, n: int) -> bool:
  # Here bitwise operation is used (specifically AND)
  return (n & n - 1) == 0 and n % 3 == 1;