def climbStairs(self, n: int) -> int:
  if(n < 2):
    return n
        
  waysToClimb = [0 for i in range(n + 1)]
  waysToClimb[0] = 0
  waysToClimb[1] = 1
  waysToClimb[2] = 2
        
  for i in range(3, n + 1):
      waysToClimb[i] = waysToClimb[i - 2] + waysToClimb[i - 1]
        
  return waysToClimb[n]