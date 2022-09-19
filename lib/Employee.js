const inquirer = require("inquirer");

class Employee{
    constructor(name = '', id = '', email = '', role = ''){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    
    getName() {
        inquirer
        .prompt({
            type: 'input',
            name: "name",
            message: "What is the employee's name that you wish to add?"
        })
        .then(( { name }) => {
            this.employee = new Employee(name)

            this.getId();
        })
    };

    getId() {
        inquirer
        .prompt({
            type: 'input',
            name: 'id',
            message: "What is the employee's id?"
        })
        .then(( id ) => {
            this.id = new Employee(id)

            this.getEmail();
        })
    };

    getEmail() {
        inquirer
        .prompt({
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        })
        .then(( email ) => {
            this.email = new Employee(email)

            this.getRole();
        })
    };

    getRole() {
        inquirer
        .prompt({
            type: 'input',
            name: 'role',
            message: "What is the employee's role?"
        })
        .then(( role ) => {
            this.role = new Employee(role)

        })
        return Employee;
    }
    
};

module.exports = Employee;