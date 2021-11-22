const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the company_db database.`)
);

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
  const sql = `ALTER table employees ADD department_id INT`;

  db.query(sql, (err, result) => {
    if (err) throw err
    console.table(result)
    promptUser()
  });

}

function addRole() {
  const sql = `ALTER table employees ADD role_id INT`;

  db.query(sql, (err, result) => {
    if (err) throw err
    console.table(result)
    promptUser()
  });

}

function addEmployee() {
  inquirer.prompt([{
    type: 'list',
    message: 'Select from the options below:',
    name: 'addEmployee',
    choices: [
      'First name',
      'Last name',
      'Role id',
      'Manager id',
    ]

  }]).then(answers => {
    switch (answers.addEmployee) {
      case 'First name':
        firstName()
        break;
      case 'Last name':
        lastName()
        break;
      case 'Role id':
        roleId()
        break;
      case 'Manager id':
        managerId()
        break;
    }
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

promptUser()