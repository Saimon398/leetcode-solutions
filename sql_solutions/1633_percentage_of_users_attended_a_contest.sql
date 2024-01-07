-- link: https://leetcode.com/problems/percentage-of-users-attended-a-contest/submissions/1081411581/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    contest_id,
    ROUND(COUNT(DISTINCT user_id)::DECIMAL / (SELECT COUNT(user_id) FROM Users) * 100, 2) AS percentage
FROM 
    Register
GROUP BY 
    contest_id
ORDER BY 
    percentage DESC,
    contest_id