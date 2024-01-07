-- link: https://leetcode.com/problems/product-sales-analysis-iii/description/?envType=study-plan-v2&envId=top-sql-50

SELECT
  l.product_id AS product_id,
  l.year AS first_year,
  l.quantity AS quantity,
  l.price AS price
FROM
  Sales AS l
  INNER JOIN
  (
  SELECT 
    product_id,
    MIN(year) AS first_year
  FROM 
    Sales
  GROUP BY 
    product_id
  ) AS r
  ON
  l.product_id = r.product_id
  AND 
  l.year = r.first_year