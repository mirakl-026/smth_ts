"use strict";
// декораторы - мета-функции
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// обычно декораторы это функции, называемые с большой буквы, и имеющие разное кол-во параметров в зависимости от их использования
// декоратор
function Logger(constructor) {
    console.log("logging...");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("creating Person object...");
    }
};
Person = __decorate([
    Logger
], Person);
const person1 = new Person();
console.log(person1);
// декораторы выполняются когда класс определён, а не когда происходит создание объекта
const person2 = new Person();
console.log(person2);
