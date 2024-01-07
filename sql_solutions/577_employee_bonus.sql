-- link: https://leetcode.com/problems/employee-bonus/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    l.name AS name,
    r.bonus AS bonus
FROM 
    Employee AS l
    LEFT JOIN
    Bonus AS r
    ON
    l.empID = r.empID
WHERE 
    bonus < 1000
    OR
    bonus IS NULL