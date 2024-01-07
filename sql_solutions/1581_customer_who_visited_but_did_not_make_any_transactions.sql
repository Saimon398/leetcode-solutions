-- link: https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  l.customer_id AS customer_id,
  COUNT(l.visit_id) AS count_no_trans
FROM 
  Visits AS l 
  LEFT JOIN 
  Transactions AS r
  ON 
  l.visit_id = r.visit_id 
WHERE 
  r.transaction_id IS NULL 
GROUP BY 
  l.customer_id 