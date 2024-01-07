-- (sale_id, year) is the primary key (combination of columns with unique values) of this table.
-- product_id is a foreign key (reference column) to Product table.
-- Each row of this table shows a sale on the product product_id in a certain year.
-- Note that the price is per unit.

-- link: https://leetcode.com/problems/product-sales-analysis-i/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  r.product_name AS product_name,
  l.year AS year,
  l.price AS price
FROM 
  Sales AS l
  INNER JOIN 
  Product AS r 
  ON 
  l.product_id = r.product_id 

  