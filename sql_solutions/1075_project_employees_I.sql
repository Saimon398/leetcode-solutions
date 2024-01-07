-- link: https://leetcode.com/problems/project-employees-i/submissions/1081391390/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    l.project_id AS project_id,
    ROUND(AVG(r.experience_years), 2) AS average_years
FROM 
    Project AS l
    INNER JOIN 
    Employee AS r
    ON
    l.employee_id = r.employee_id
GROUP BY 
    l.project_id
