def countPrimes(self, number: int) -> int:
  counter = 0
  if (number == 0 or number == 1):
    return 0
        
  primeNumbers = [True for i in range(number)]
  primeNumbers[0] = primeNumbers[1] = False
        
  for i in range(2, number):
    if(primeNumbers[i]):
      for j in range(2 * i, number, i):
        primeNumbers[j] = False
      counter += 1
                
  return counter