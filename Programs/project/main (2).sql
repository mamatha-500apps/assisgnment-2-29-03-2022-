-- create a table
 CREATE TABLE students (
    PersonID int PRIMARY KEY,
    Name varchar(255) ,
   Address varchar(255)
);
-- insert some values
INSERT INTO students VALUES (1, 'Mamatha','wgl');
INSERT INTO students VALUES (2, 'Sudhakar','hyd');
INSERT INTO students VALUES (3, 'Akhila','wgl');
INSERT INTO students VALUES (4, 'Anusha','hyd');
INSERT INTO students VALUES (5, 'Akhila','khmm');
INSERT INTO students VALUES (6, 'Bujji','hnk');
-- fetching data
-- SELECT * FROM students ORDER BY Name 
-- SELECT * FROM students ORDER BY Name DESC
-- SELECT * FROM students ORDER BY Name ASC ,Address DESC
-- SELECT DISTINCT Name from students
-- SELECT COUNT(DISTINCT Name)  from students
-- SELECT * FROM students WHERE Name='Akhila'
-- SELECT * FROM students WHERE Name='Akhila' AND Address='wgl'
-- SELECT * FROM students WHERE Name='Akhila' OR Address='hyd'
-- SELECT * FROM students WHERE NOT Address='hyd'
-- SELECT * FROM students WHERE Name IS NULL
-- UPDATE students SET Name='Akhil' WHERE PersonID=3;
-- SELECT * FROM students
-- DELETE FROM students WHERE Name='Sudhakar';
-- SELECT * FROM students LIMIT 2

-- NAME ENDING WITH a
-- SELECT * FROM students WHERE Name LIKE '%a'

-- NAME starting WITH A
-- SELECT * FROM students WHERE Name LIKE 'A%'

-- NAME MIDDLE OF THE NAME
-- SELECT * FROM students WHERE Name LIKE 'A_U_%'
-- SELECT * FROM students WHERE Address IN ('hyd')
CREATE TABLE student(
PersonID INT PRIMARY KEY,
Contact long,
Age INT
);
INSERT INTO student VALUES (1,'8466836076',25);
INSERT INTO student VALUES (2,'8466226076',30);
INSERT INTO student VALUES (31,'8466836077',15);
INSERT INTO student VALUES (14,'8460815076',20);
-- SELECT * FROM student

-- inner join 
SELECT students.PersonID, student.Contact,students.Name
FROM students
INNER JOIN student ON students.PersonID = student.PersonID;
 -- left join 
 SELECT students.Name, student.Contact
FROM students
LEFT JOIN student ON students.PersonID = student.PersonID
ORDER BY students.Name;
-- right join 
SELECT students.Name, student.Contact
FROM students
RIGHT JOIN student ON students.PersonID = student.PersonID