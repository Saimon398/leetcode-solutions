def isPalindrome(self, x: int) -> bool:
  string = str(x)
  i = 0
  j = len(string) - 1
        
  while (i < j):
    if (string[i] != string[j]):
      return False
    i += 1
    j -= 1
            
  return True