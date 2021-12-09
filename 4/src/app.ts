// intersection types
// позволяют комбинировать разные типы

// описание типа админ
type Admin = {
    name: string;
    privileges: string[];
}

// описание типа сотррудник
type Employee = {
    name: string;
    startDate: Date;
}

// комбинированный тип админа и сотрудника
type ElevatedEmployee = Admin & Employee;   // в таком случае буду все поля, без повторов [name, privileges, startDate]

const e1 : ElevatedEmployee = {
    name: "John",
    privileges: ["work", "not work"],
    startDate: new Date()
}

console.log(e1);

// при использовании с Union получается так
type Combinable = string | number;
type Numerical = number | boolean;
type Universal = Combinable & Numerical;    // тут пересечение - number

//const a : Universal = "aaaa";   // нет
const b : Universal = 10;   // нормально

// Type Guards
// вспоминаем работу с юнионами
function add(n1: Combinable, n2: Combinable) {
    // обязаны проверить на типы - это и есть type Guard вообще-то с использованием typeof
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}

console.log(add("2", 3));
console.log(add(1,4));

// а вот с кастомными типами проверка на typeof не получится, так как все они object
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("emp name: " + emp.name);   // здесь нет проблем, т.к. имя есть и у employee и у админа
    //if (typeof emp === "object")    // type guard через typeof здесь не сработает, т.к. всегда object
    // поэтому надо проверять прямо на то, что нужно и через JS (так как проверки по правилам JS делаются):
    if ("privileges" in emp) {
        console.log("emp privileges: " + emp.privileges);
    }

    if ("startDate" in emp) {
        console.log("emp startDate: " + emp.startDate);
    }
}

const ue1 : UnknownEmployee = {
    name: "Hazan",
    startDate: new Date()
}

const ue2: UnknownEmployee = {
    name: "Makesh",
    privileges: ["draw", "cook"]
}

printEmployeeInformation(ue1);
printEmployeeInformation(ue2);

// Type Guard для классов:
class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log("Driving truck...");
    }

    cargoLoad(amount: number) {
        console.log("cargo load... " + amount);
    }
}

type Vehicle = Car | Truck;
const v1: Vehicle = new Car();
const v2: Vehicle = new Truck();

function useVehicle(v: Vehicle) {
    v.drive();
    // можно так-же как с типами
    // if ("cargoLoad" in v) {
    //     v.cargoLoad(1000);
    // }
    // но лучше как с классами (но нельзя с интерфейсами, потому как после компиляции их не существует)
    if (v instanceof Truck) {
        v.cargoLoad(1000);
    }
}

useVehicle(v1);
useVehicle(v2);