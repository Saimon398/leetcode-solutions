-- link: https://leetcode.com/problems/rising-temperature/submissions/1081338915/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  l.id AS id 
FROM 
  Weather AS l
  INNER JOIN 
  Weather AS r 
  ON 
  l.recordDate = r.recordDate + 1 
WHERE 
  l.temperature > r.temperature 