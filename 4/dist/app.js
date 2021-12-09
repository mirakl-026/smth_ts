"use strict";
// intersection types
// позволяют комбинировать разные типы
const e1 = {
    name: "John",
    privileges: ["work", "not work"],
    startDate: new Date()
};
console.log(e1);
//const a : Universal = "aaaa";   // нет
const b = 10; // нормально
// Type Guards
// вспоминаем работу с юнионами
function add(n1, n2) {
    // обязаны проверить на типы - это и есть type Guard вообще-то с использованием typeof
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
console.log(add("2", 3));
console.log(add(1, 4));
function printEmployeeInformation(emp) {
    console.log("emp name: " + emp.name); // здесь нет проблем, т.к. имя есть и у employee и у админа
    //if (typeof emp === "object")    // type guard через typeof здесь не сработает, т.к. всегда object
    // поэтому надо проверять прямо на то, что нужно и через JS (так как проверки по правилам JS делаются):
    if ("privileges" in emp) {
        console.log("emp privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("emp startDate: " + emp.startDate);
    }
}
const ue1 = {
    name: "Hazan",
    startDate: new Date()
};
const ue2 = {
    name: "Makesh",
    privileges: ["draw", "cook"]
};
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
    cargoLoad(amount) {
        console.log("cargo load... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(v) {
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
function moveAnimal(animal) {
    switch (animal.type) {
        case "bird":
            console.log("moving with speed: " + animal.flyingSpeed);
            break;
        case "horse":
            console.log("moving with speed: " + animal.runningSpeed);
            break;
    }
}
moveAnimal({ type: "bird", flyingSpeed: 500 });
