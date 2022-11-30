def convertToBase7(self, num: int) -> str:
  # Case 1: Return 0, if number equals 0
  if (num == 0):
    return str(0)
        
  absValue = abs(num)
  convertedNumber = ''
        
  # Case 2: Use Gorner's Algorithm to convert number
  while (absValue > 0):
    # Take last digit of given number
    lastDigit = absValue % 7 
    absValue = absValue // 7
    convertedNumber = str(lastDigit) + convertedNumber
        
  return '-' + str(convertedNumber) if num < 0 else convertedNumber