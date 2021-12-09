"use strict";
//class Department {
class Department {
    constructor(id, n) {
        this.employees = []; // protected как private только даёт доступ наследникам
        this.id = id;
        this.name = n;
    }
    addEmployee(employeeName) {
        // validation
        this.employees.push(employeeName);
    }
    printEmployeeInformation() {
        console.log(`Number of employees: ${this.employees.length}`);
        console.log(`Employees: ${this.employees}`);
    }
    // статические поля и методы - с доступом напрямую через класс, без инстансциирования
    static getEmployeeFrom() {
        return "Employee: [name: , age: ,]";
    }
}
Department.ClassInfo = "class: Department";
class ITDepartment extends Department {
    // пока не добавлен собственный конструктор, конструктор родителя вызывается автоматических с передачей параметров
    // собственный конструктор:
    constructor(id, admins) {
        super(id, "ITControl"); // конструктор родителя
        // this работает только после вызова super
        this.admins = admins;
    }
    describe() {
        console.log("Describe from ITDepartment");
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
    describe() {
        console.log("Describe from AccountDepartment");
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
// работа со статическими полями и методами
console.log(Department.getEmployeeFrom());
console.log(Department.ClassInfo);
accDep.describe();
// пример реализации синглтона
class HQDepartment extends Department {
    // для синглтона - конструктор приватный
    constructor(id) {
        super(id, "HQ");
    }
    // получение синглтона
    static getInstance() {
        if (HQDepartment.instance)
            return HQDepartment.instance;
        else {
            HQDepartment.instance = new HQDepartment("HQ1");
            return HQDepartment.instance;
        }
    }
    describe() {
        console.log("Describe from HQ");
    }
}
// получение синглтона
const hq1 = HQDepartment.getInstance();
const hq2 = HQDepartment.getInstance();
console.log(hq1);
console.log(hq2);
