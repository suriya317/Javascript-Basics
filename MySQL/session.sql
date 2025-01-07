SELECT first_name, age
FROM Customers;

create table mentors (
mentor_id INT PRIMARY KEY,
name varchar(100) NOT NULL,
specifications varchar(50)
);

-- students

create table students (
student_id INT PRIMARY KEY,
name varchar(100) NOT NULL,
age INT check (age > 0),
grade varchar(10),
mentor_id INT,
foreign key (mentor_id) references mentors(mentor_id)
);

-- INSERT two rows select query

INSERT into mentors(mentor_id, name, specifications) values (1, "sanjay", "FSD");

Insert into mentors(mentor_id, name, specifications) values (2, "shan", "FSD");

INSERT into students(student_id, name, age, grade, mentor_id) values(1, "suriya", 24, "10", 1);

SELECT \* from mentors;
SELECT \* from students;

SELECT students.name as students, mentors.name as mentor from students join mentors on students.mentor_id = mentors.mentor_id;