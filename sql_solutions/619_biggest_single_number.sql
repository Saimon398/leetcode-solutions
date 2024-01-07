-- link: https://leetcode.com/problems/biggest-single-number/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  IF(COUNT(num) = 1, num, NULL) AS num 
FROM 
  MyNumbers 
GROUP BY 
  num 
ORDER BY 
  num DESC 
LIMIT 
  1 