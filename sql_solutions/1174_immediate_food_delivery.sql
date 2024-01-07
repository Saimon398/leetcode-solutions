-- link: https://leetcode.com/problems/immediate-food-delivery-ii/submissions/1082996119/?envType=study-plan-v2&envId=top-sql-50

SELECT 
  ROUND(
      AVG(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END) * 100,
      2
  ) AS immediate_percentage
FROM
  Delivery
WHERE
  (customer_id, order_date) IN (
  SELECT 
    customer_id,
    MIN(order_date) AS first_order_date
  FROM 
    Delivery
  GROUP BY 
    customer_id)