INSERT INTO departments (id, name)
VALUES (1, "Thieves"),
       (2, "Assassins"),
       (3, "Monarchy"),
       (4, "Mages"),
       (5, "Templars");

INSERT INTO managers (id, first_name, last_name)
VALUES (1, "Jim", "Halpert"),
       (2, "Dwight", "Shrute")

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Manager", 500000.00, 3),
       (2, "Employee", 400000.00, 4),

INSERT INTO employees (id, first_name, last_name, role_id, manager_id, department_id)     
VALUES (1, "Moff", "Gideon", 2, 2, 1),
       (2, "Boba", "Tea", 2, 1, 2),
       (3, "Geralt", "Witcher", 2, 1, 4),
       (4, "Ciri", "Catalyst", 2, 2, 4),
       (5, "Grogu", "Child", 2, 1, 3)