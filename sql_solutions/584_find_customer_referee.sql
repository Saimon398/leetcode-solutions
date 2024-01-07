-- In SQL, id is the primary key column for this table.
-- Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.

-- link: https://leetcode.com/problems/find-customer-referee/description/?envType=study-plan-v2&envId=top-sql-50


SELECT 
  name 
FROM 
  Customer
WHERE 
  CASE WHEN referee_id IS NULL THEN 0 ELSE referee_id END != 2