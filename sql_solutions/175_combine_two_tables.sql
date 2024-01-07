-- link: https://leetcode.com/problems/combine-two-tables/submissions/1080465314/

SELECT 
  l.firstName AS firstName,
  l.lastName AS lastName,
  r.city AS city,
  r.state AS state
FROM 
  Person AS l
  LEFT JOIN
  Address AS r
  ON
  l.personId = r.personID