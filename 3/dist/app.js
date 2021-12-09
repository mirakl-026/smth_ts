"use strict";
class Department {
    constructor(id, n) {
        this.employees = []; // protected как private только даёт доступ наследникам
        this.id = id;
        this.name = n;
    }
    /*
        Два поля и конструктор можно записать так:

        constructor(private id: string, public name: string)

        именно так и всё в 1 строку, TS поймёт интерпретирует это так - у класса есть 2 поля - публичное name
        и приватное employees - и им, через конструктор задаются значения
     */
    //constructor(private id: string, public name: string){}
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
class ITDepartment extends Department {
    // пока не добавлен собственный конструктор, конструктор родителя вызывается автоматических с передачей параметров
    // собственный конструктор:
    constructor(id, admins) {
        super(id, "ITControl"); // конструктор родителя
        // this работает только после вызова super
        this.admins = admins;
    }
}
class AccountDepartment extends Department {
    constructor(id) {
        super(id, "AccountControl");
        this.reports = [];
        this.lastReport = this.reports[0];
    }
    // геттер - свойство, для получения чего-то + логика получения
    get justLastReport() {
        if (this.lastReport)
            return this.lastReport;
        else
            throw new Error("no last report.");
    }
    // сеттер
    set justLastReport(value) {
        if (!value)
            throw new Error("please put valid text!");
        this.addReport(value);
    }
    // перегрузка метода из базового класса
    addEmployee(employeeName) {
        if (employeeName[0] === 'A') {
            return;
        }
        this.employees.push(employeeName); // и использования поля, базового класса за счёт модификатора protected
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
//const accountingDep = new Department("D1","Accounting");
const itDep = new ITDepartment("D1", ["Bob", "Sam"]);
itDep.describe();
// const accDepCopy = { name: "faf", describe: accountingDep.describe }
// accDepCopy.describe();
itDep.addEmployee("Sam");
itDep.addEmployee("Max");
itDep.addEmployee("Anna");
itDep.printEmployeeInformation();
console.log(itDep);
const accDep = new AccountDepartment("A2");
//console.log("last report:", accDep.justLastReport); // Exception
accDep.addReport("TypeScript is good");
accDep.addReport("But JavaScript is better!");
console.log("last report:", accDep.justLastReport);
accDep.justLastReport = "Next or Nest?";
accDep.printReports();
accDep.addEmployee("Alex");
accDep.addEmployee("Kate");
accDep.printEmployeeInformation();
