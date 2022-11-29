def hammingDistance(self, x: int, y: int) -> int:
  xor = bin(x ^ y)
  hammingDistance = 0
  for i in range(len(xor)):
    if(xor[i] == '1'):
      hammingDistance += 1
                
  return hammingDistance