-- link: https://leetcode.com/problems/confirmation-rate/submissions/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    l.user_id AS user_id,
    COALESCE(r.confirmation_rate, 0) AS confirmation_rate
FROM
    Signups AS l
    LEFT JOIN 
    (
    SELECT
        user_id,
        ROUND(COUNT(time_stamp) FILTER (WHERE action = 'confirmed')::DECIMAL
        / COUNT(time_stamp), 2)AS confirmation_rate
    FROM 
        Confirmations
    GROUP BY 
        user_id
    ) AS r
    ON
    l.user_id = r.user_id