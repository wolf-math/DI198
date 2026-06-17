"use strict";
class Person {
    firstName;
    lastName;
    birthdate;
    constructor(firstName, lastName, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
    getBirthdate() {
        return this.birthdate.toLocaleDateString();
    }
}
let yaakov = new Person('Yaakov', 'Stol', new Date(1994, 5, 5));
// console.log(yaakov.getBirthdate());
class Employee extends Person {
    jobTitle;
    constructor(firstName, lastName, birthdate, jobTitle) {
        // call the constructor of the Person class:
        super(firstName, lastName, birthdate);
        this.jobTitle = jobTitle;
        this.jobTitle = jobTitle;
    }
    describe() {
        return `${super.describe()} I'm a ${this.jobTitle}.`;
    }
}
// Define a subclass Manager that extends Employee and includes a private property department.
class Manager extends Employee {
    department;
    static departmentCount = 0;
    constructor(firstName, lastName, birthdate, jobTitle, department) {
        super(firstName, lastName, birthdate, jobTitle);
        this.department = department;
        this.department = department;
        Manager.departmentCount++;
    }
    describe() {
        return `${super.describe()} I work in the ${this.department} team.`;
    }
    static getDepartmentCount() {
        return Manager.departmentCount;
    }
}
const ariel = new Manager('ariel', 'zinger', new Date(1986, 2, 2), 'product manager', 'R&D');
console.log(ariel.describe());
console.log(ariel.getBirthdate());
console.log(Manager.getDepartmentCount());
