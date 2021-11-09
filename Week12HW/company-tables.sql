Create database company;
use company;
Create table departments(id INT PRIMARY KEY, name VARCHAR(30));
Create table managers(id INT PRIMARY KEY, first_name VARCHAR (30), last_name VARCHAR (30));
Create table roles(id INT PRIMARY KEY, title VARCHAR(30), salary DECIMAL, department_id INT);
Create table employees(id INT PRIMARY KEY, first_name VARCHAR (30), last_name VARCHAR(30), role_id INT, manager_id INT);
select count(*) from departments;
UPDATE employees SET manager_id = 1 WHERE manager_id = 2;
SELECT * FROM employees ORDER BY manager_id;
SELECT * FROM employees ORDER BY department_id desc;
ALTER table employees ADD department_id INT;
DELETE FROM employees WHERE department_id = 1;
SELECT * FROM employees;

SELECT * FROM employees AS mages WHERE department_id = 4;
-- SELECT * FROM employees WHERE role_id = 2 AND department_id =4;
SELECT SUM(salary) AS TotalSalary FROM mages;