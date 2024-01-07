-- link: 

SELECT 
    a.student_id AS student_id,
    a.student_name AS student_name,
    b.subject_name AS subject_name,
    COALESCE(c.attended_exams, 0) AS attended_exams
FROM 
    Students AS a
    CROSS JOIN 
    Subjects AS b
    LEFT JOIN
    (
    SELECT 
        student_id,
        subject_name,
        COUNT(subject_name) AS attended_exams
    FROM 
        Examinations
    GROUP BY 
        student_id,
        subject_name
    ) AS c
    ON
    a.student_id = c.student_id
    AND
    b.subject_name = c.subject_name
ORDER BY 
    student_id,
    subject_nam