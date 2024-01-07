-- id is the primary key (column with unique values) for this table.
-- Each row of this table contains the id and the name of an employee in a company.

-- link: https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/description/?envType=study-plan-v2&envId=top-sql-50

SELECT
  r.unique_id AS unique_id,
  l.name AS name
FROM 
  Employess AS l 
  LEFT JOIN 
  EmployeeUNI AS r 
  ON 
  l.id = r.id 
  