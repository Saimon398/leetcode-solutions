def hammingWeight(self, bits: int) -> int:
  counter = 0
  while (bits):
    bits &= (bits - 1)
    counter += 1
  return counter