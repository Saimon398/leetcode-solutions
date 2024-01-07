-- link: https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  l.employee_id AS employee_id,
  l.name AS name,
  COUNT(r.name) AS reports_count,
  ROUND(AVG(r.age)) AS average_age
FROM 
  Employees AS l
  INNER JOIN
  Employees AS r
  ON
  l.employee_id = r.reports_to
GROUP BY 
  l.employee_id,
  l.name
ORDER BY 
  employee_id