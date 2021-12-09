"use strict";
// intersection types
// позволяют комбинировать разные типы
var _a;
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
// type casting
// явно указать TS , что этот тип это ЭТОТ тип!
// получим DOM элемент
const paragraph = document.querySelector("p"); // тут TS понимает что это HTMLParagraph или null
const aSix = document.getElementById("6"); // а вот тут он лишь думает, что это HTMLElement или null, тогда указываем ему <что за элемент> и ! - что точно не null
aSix.href = "https://google.com";
// если это внутри реакта (JSX, TSX) - там нельзя лишний раз использовать <> , поэтому альтернативой будет:
const aSeven = document.getElementById("7");
aSeven.href = "https://bing.com";
// либо так
const aNine = document.getElementById("9");
if (aNine) {
    aNine.href = "https://duckduckgo.com";
}
const errorBag = {
    "email": "stupid email",
    "name": "wrong name!"
};
console.log("errors:\n");
for (const errorBagKey in errorBag) {
    console.log(errorBagKey + "-" + errorBag[errorBagKey]);
}
function add2(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
const res2 = add2(1, 2);
res2.toPrecision(1); // работает с number , не работает с Combinable;
const res3 = add2("1", "2");
res3.split('a'); // работает со string , не работает с Combinable;
// optional chain - опциональные цепочки вызовов
const fetchedUserData = {
    id: "u1",
    name: "Bob",
    job: {
        title: "CEO",
        description: "My own company"
    }
};
// а вдруг полей не будет?
// в JS сначала проверяют на наличие поля затем идут глубже:
// if (fetchedUserData.job && fetchedUserData.job.title) - в TS так не прокатит, зато можно так:
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// проверка на null и undefined
const userInput = "";
// проблема в том, что допустим хотим не сохранять null или undefined - но falsy значения тоже попадают под false
const storedData = userInput || "default";
console.log("SD1:", storedData); // default, хотя мы хотели увидеть пустую строку
// тогда можно воспользоваться чисто TS проверкой на null и undefined
const storedData2 = userInput !== null && userInput !== void 0 ? userInput : "default";
console.log("SD2:", storedData2); // всё правильно пустая строка, но не null или undefined
