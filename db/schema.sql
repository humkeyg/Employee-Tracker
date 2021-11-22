DROP DATABASE IF EXISTS company_db;
Create database company_db;
use company_db;
Create table departments(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30));
Create table managers(id INT PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR (30), last_name VARCHAR (30));
Create table roles(id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(30), salary DECIMAL, department_id INT);
Create table employees(id INT PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR (30), last_name VARCHAR(30), role_id INT, manager_id INT, department_id INT);
