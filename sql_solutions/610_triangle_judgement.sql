-- link: https://leetcode.com/problems/triangle-judgement/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  x,
  y,
  z,
  CASE 
    WHEN x + y > z AND y + z > x AND z + x > y THEN 'Yes'
    ELSE 'No'
  END AS triangle
FROM 
  Triangle