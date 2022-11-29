def countPrimes(self, number: int) -> int:
  counter = 0
  if (number == 0 or number == 1):
    return 0
  # Consider that all indices in array, starting
  # from 2 are prime numbers      
  primeNumbers = [True for i in range(number)]
  primeNumbers[0] = primeNumbers[1] = False
  # Iterate through all indices   
  for i in range(2, number):
    # If indice is a prime number, mark each
    # indice, which is multiple one of the i
    # as composite one
    if(primeNumbers[i]):
      for j in range(2 * i, number, i):
        primeNumbers[j] = False
      counter += 1
                
  return counter