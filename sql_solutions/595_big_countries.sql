-- name is the primary key (column with unique values) for this table.
-- Each row of this table gives information about the name of a country,
-- the continent to which it belongs, its area, the population, and its GDP value.

-- link: https://leetcode.com/problems/big-countries/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  name, 
  population, 
  area 
FROM 
  World
WHERE 
  population >= 25000000
  OR
  area >= 3000000