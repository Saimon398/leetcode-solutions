-- link: https://leetcode.com/problems/queries-quality-and-percentage/submissions/1081588590/?envType=study-plan-v2&envId=top-sql-50

SELECT
    query_name,
    ROUND(SUM(rating::DECIMAL / position) / COUNT(rating), 2) AS quality,
    ROUND(COUNT(rating) FILTER (WHERE rating < 3)::DECIMAL / COUNT(rating) * 100, 2) AS poor_query_percentage
FROM
    Queries
GROUP BY 
    query_name