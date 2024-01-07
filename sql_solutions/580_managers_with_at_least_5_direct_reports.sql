-- link: https://leetcode.com/problems/managers-with-at-least-5-direct-reports/submissions/1081253293/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  l.name AS name 
FROM 
  Employee AS l
  INNER JOIN 
  Employee AS r 
  ON 
  l.id = r.managerId 
GROUP BY 
  l.name, 
  l.id 
HAVING 
  COUNT(l.name) >= 5