-- link: https://leetcode.com/problems/average-selling-price/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    l.product_id AS product_id,
    COALESCE(ROUND(SUM(l.price * r.units)::DECIMAL / SUM(r.units), 2), 0) AS average_price
FROM 
    Prices AS l
    LEFT JOIN
    UnitsSold AS r
    ON
    l.product_id = r.product_id
    AND 
    r.purchase_date BETWEEN l.start_date AND l.end_date
GROUP BY 
    l.product_id