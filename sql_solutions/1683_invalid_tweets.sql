-- tweet_id is the primary key (column with unique values) for this table.
-- This table contains all the tweets in a social media app.

-- link: https://leetcode.com/problems/invalid-tweets/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  tweet_id 
FROM 
  Tweets 
WHERE 
  LENGTH(TRIM(content)) > 15 