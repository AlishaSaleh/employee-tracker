USE employees_db;

INSERT INTO department (name)
VALUES ('Sales');

INSERT INTO department (name)
VALUES ('Engineering');

INSERT INTO department (name)
VALUES ('Finance');

INSERT INTO department (name)
VALUES ('HR');

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ('HR Admin', 30000, 16);

INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 70000, 14);

INSERT INTO role (title, salary, department_id)
VALUES ('Financial Manager', 50000, 15);

INSERT INTO role (title, salary, department_id)
VALUES ('Head of Sales', 80000, 13);

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Representative', 50000, 13);

INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 35000, 15);

INSERT INTO role (title, salary, department_id)
VALUES ('Junior Software Engineer', 30000, 14);

INSERT INTO role (title, salary, department_id)
VALUES ('HR Manager', 60000, 16);

SELECT * FROM role;

ALTER TABLE employee AUTO_INCREMENT=100; 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Sam', 'Jones', 4, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Halima', 'Gamal', 5, 100);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'McKay', 5, 100);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Gemma', 'Wang', 5, 100);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Cynthia', 'Black', 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Alexandra', 'Tui', 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Haifa', 'Wehbe', 7, 105);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Jonas', 'Schrieber', 7, 104);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Will', 'Havering', 8, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Max', 'Nicks', 1, 109);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Amal', 'Vella', 3, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Brandon', 'Hunt', 6, 111);

SELECT * FROM employee;