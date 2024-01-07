-- link: https://leetcode.com/problems/game-play-analysis-iv/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  ROUND(SUM(CASE WHEN r.day_after_log_day IS NULL THEN 0 ELSE 1 END)::DECIMAL / COUNT(DISTINCT l.player_id), 2) AS fraction
FROM 
  Activity AS l
  LEFT JOIN
  (
  SELECT
    player_id,
    CAST(MIN(event_date) + INTERVAL '1 day' AS date) AS day_after_log_day
  FROM
    Activity
  GROUP BY 
    player_id
  ) AS r
  ON 
  l.event_date = r.day_after_log_day
  AND 
  l.player_id = r.player_id