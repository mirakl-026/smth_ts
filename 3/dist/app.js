"use strict";
class Department {
    //
    // constructor(id: string, n: string) {
    //     this.id = id;
    //     this.name = n;
    // }
    /*
        Два поля и конструктор можно записать так:

        constructor(private id: string, public name: string)

        именно так и всё в 1 строку, TS поймёт интерпретирует это так - у класса есть 2 поля - публичное name
        и приватное employees - и им, через конструктор задаются значения
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // public name: string;    // без модификатора - public
        this.employees = [];
    }
    describe() {
        console.log("Department:", this.name);
    }
    addEmployee(employeeName) {
        // validation
        this.employees.push(employeeName);
    }
    printEmployeeInformation() {
        console.log(`Number of employees: ${this.employees.length}`);
        console.log(`Employees: ${this.employees}`);
    }
}
const accountingDep = new Department("D1", "Accounting");
accountingDep.describe();
// const accDepCopy = { name: "faf", describe: accountingDep.describe }
// accDepCopy.describe();
accountingDep.addEmployee("Sam");
accountingDep.addEmployee("Max");
accountingDep.addEmployee("Anna");
accountingDep.printEmployeeInformation();
