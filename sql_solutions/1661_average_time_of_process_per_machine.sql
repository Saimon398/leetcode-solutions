-- link: https://leetcode.com/problems/average-time-of-process-per-machine/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  l.machine_id AS machine_id,
  ROUND(SUM(l.timestamp - r.timestamp) / COUNT(l.process_id), 3) AS processing_time
FROM 
  Activity AS l
  INNER JOIN 
  Activity AS r 
  ON 
  l.machine_id = r.machine_id 
  AND 
  l.process_id = r.process_id 
WHERE 
  l.activity_type = 'end'
  AND 
  r.activity_type = 'start'
GROUP BY 
  l.machine_id 