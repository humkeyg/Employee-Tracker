USE company_db;

INSERT INTO departments (name)
VALUES ("Thieves"),
       ("Assassins"),
       ("Monarchy"),
       ("Mages"),
       ("Templars");

INSERT INTO managers (first_name, last_name)
VALUES ("Jim", "Halpert"),
       ("Dwight", "Shrute");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 500000.00, 3),
       ("Employee", 400000.00, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id, department_id)     
VALUES ("Moff", "Gideon", 2, 2, 1),
       ("Boba", "Tea", 2, 1, 2),
       ("Geralt", "Witcher", 2, 1, 4),
       ("Ciri", "Catalyst", 2, 2, 4),
       ("Grogu", "Child", 2, 1, 3);