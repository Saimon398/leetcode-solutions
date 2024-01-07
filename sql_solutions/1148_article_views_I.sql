-- There is no primary key (column with unique values) for this table, the table may have duplicate rows.
-- Each row of this table indicates that some viewer viewed an article (written by some author) on some date. 
-- Note that equal author_id and viewer_id indicate the same person.

-- link: https://leetcode.com/problems/article-views-i/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  DISTINCT author_id AS id 
FROM 
  Views 
WHERE 
  author_id = viewer_id 
ORDER BY 
  id 

