-- link: https://leetcode.com/problems/user-activity-for-the-past-30-days-i/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  activity_date AS day,
  COUNT(DISTINCT user_id) AS active_users
FROM
  Activity 
WHERE 
  activity_date BETWEEN DATE_ADD('2019-07-27', INTERVAL -19 DAY)
  AND '2019-07-17'
GROUP BY
  activity_date