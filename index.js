// Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
require('dotenv').config();

// Arrays to be populated
var roleArr = [];
var managerArr = [];

// Connecting to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employees_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as ID ${connection.threadId}`);
    // call inquirier prompt function here
    startMenu();
});

startMenu = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'menuChoice',
            message: 'Welcome to the Employee Tracker! What would you like to do?',
            choices: [
                'View ALL employees',
                'View employees by ROLE',
                'View employees by DEPARTMENT',
                'ADD employee',
                'ADD role',
                'ADD department',
                'UPDATE employee role'
            ]
        }
    ).then((data) => {
        switch (data.menuChoice) {
            case 'View ALL employees':
                viewAllEmployees();
                break;
            case 'View employees by ROLE':
                viewEmployeeRoles();
                break;
            case 'View employees by DEPARTMENT':
                viewEmployeeDept();
                break;
            case 'ADD employee':
                addEmployee();
                break;
            case 'ADD role':
                addRole();
                break;
            case 'ADD department':
                addDept();
                break;
            case 'UPDATE employee role':
                updateEmployeeRole();
                break;
        }
    });
};

// VIEW ALL EMPLOYEES FUNCTION
viewAllEmployees = () => {
    console.log('view employees');
    connection.query(
        "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    )
};

// VIEW EMPLOYEES BY ROLE FUNCTION 
viewEmployeeRoles = () => {
    console.log('view roles');
    connection.query(
        "SELECT employee.first_name, employee.last_name, role.title AS role FROM employee JOIN role ON employee.role_id = role.id;",
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    )
};

// VIEW EMPLOYEES BY DEPARTMENT FUNCTION
viewEmployeeDept = () => {
    console.log('view dept');
    connection.query(
        "SELECT employee.first_name, employee.last_name, department.name AS department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    )
};

// ADD EMPLOYEES FUNCTION
addEmployee = () => {
    console.log('add employee');
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Please enter their first name'
        }, {
            type: 'input',
            name: 'lastName',
            message: 'Please enter their last name'
        }, {
            type: 'list',
            name: 'roleChoice',
            message: 'Please select their role',
            choices: selectRole()
        }, {
            type: 'list',
            name: 'managerChoice',
            message: 'Do they have a manager?',
            choices: ['Yes', 'No']
        }
    ]).then((data) => {
        if (data.managerChoice == 'Yes') {
            selectManager();
        }
    })
};

selectRole = () => {
    connection.query(
        'SELECT * FROM role',
        (err, res) => {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                roleArr.push(res[i].title)
            }
        }
    )
    return roleArr;
}

selectManager = () => {
    connection.query(
        'SELECT first_name, last_name FROM employee WHERE manager_id IS NULL',
        (err, res) => {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                let managerName = `${res[i].first_name} ${res[i].last_name}`;
                managerArr.push(managerName)
            }
            inquirer.prompt({
                type: 'list',
                name: 'manager',
                message: 'Please enter their manager',
                choices: managerArr
            }).then((data) => { console.log(data.manager) })
        }
    )

}
// ADD ROLES FUNCTION
addRole = () => {
    console.log('add role');
};

// ADD DEPARTMENT FUNCTION 
addDept = () => {
    console.log('add dept');
};

// UPDATE EMPLOYEE ROLE FUNCTION
updateEmployeeRole = () => {
    console.log('update employee');
};