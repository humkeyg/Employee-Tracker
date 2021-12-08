const inquirer = require("inquirer");
const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
);

db.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to the company_db database.`)
  promptUser();
});

function promptUser() {
  inquirer.prompt([{
    type: 'list',
    message: 'What would you like to do next?',
    name: 'choice',
    choices: [
      'View all employees',
      'View all departments',
      'View all roles',
      'Add department',
      'Add role',
      'Add employee',
      'Update employee role',
      'Delete departments, roles, or employees'

    ]
  }]).then(answers => {
    switch (answers.choice) {
      case 'View all employees':
        viewEmployees()
        break;

      case 'View all departments':
        viewDepartments()
        break;

      case 'View all roles':
        viewRoles()
        break;

      case 'Add department':
        addDepartment()
        break;

      case 'Add role':
        addRole()
        break;

      case 'Add employee':
        addEmployee()
        break;

      case 'Update employee role':
        updateEmployeeRole()
        break;

      case 'Delete departments, roles, or employees':
        deleteFrom()
        break;

      default:
        break;
    }
  })
}

function viewEmployees() {
  const sql = `SELECT * FROM employees`;

  db.query(sql, (err, result) => {
    if (err) throw err
    console.table(result)
    promptUser()
  });

}

function viewDepartments() {
  const sql = `SELECT * FROM departments`;

  db.query(sql, (err, result) => {
    if (err) throw err
    console.table(result)
    promptUser()
  });

}

function viewRoles() {
  const sql = `SELECT * FROM roles`;

  db.query(sql, (err, result) => {
    if (err) throw err
    console.table(result)
    promptUser()
  });

}

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter department name:',
      name: 'name'
    },
  ]).then(function (res) {
    db.query('INSERT INTO departments (name) VALUES (?)', [res.name], function (err, data) {
      if (err) throw err;
      console.table("Successfully added");
      promptUser();
    })
  });

}

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter role title:',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Enter salary:',
      name: 'salary'
    },
    {
      type: 'input',
      message: 'Enter department id (1-5):',
      name: 'departmentId'
    },
  ]).then(function (res) {
    db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [res.title, res.salary, res.departmentId], function (err, data) {
      if (err) throw err;
      console.table("Successfully added");
      promptUser();
    })
  });

}

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter first name:',
      name: 'firstName'
    },
    {
      type: 'input',
      message: 'Enter last name:',
      name: 'lastName'
    },
    {
      type: 'input',
      message: 'Enter role id (1,2):',
      name: 'roleId'
    },
    {
      type: 'input',
      message: 'Enter manager id (1,2):',
      name: 'managerId'
    },
    {
      type: 'input',
      message: 'Enter department id (1-5):',
      name: 'departmentId'
    },
  ]).then(function (res) {
    db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id, department_id) VALUES (?, ?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId, res.departmentId], function (err, data) {
      if (err) throw err;
      console.table("Successfully added");
      promptUser();
    })
  });

}

function updateEmployeeRole() {
  const sql = `ALTER table employees ADD role_id INT`;

  db.query(sql, (err, result) => {
    if (err) throw err
    console.table(result)
    promptUser()
  });

}

function deleteFrom() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter department name:',
      name: 'departmentName'
    },
  ]).then(function (res) {
    db.query('DELETE FROM departments [WHERE name] VALUES (?)', [res.departmentName], function (err, data) {
      if (err) throw err;
      console.table("Successfully deleted");
      promptUser();
    })
  });
}