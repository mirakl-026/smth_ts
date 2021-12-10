"use strict";
// странный декоратор
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// декоратор (через фабрику
function WithTemplate(html, elemId) {
    console.log("template decorator");
    return function (_) {
        const elem = document.getElementById(elemId);
        if (elem) {
            elem.innerHTML = html;
        }
    };
}
function Logger2(logMessage) {
    return function (_) {
        console.log(logMessage);
    };
}
let PersonTemplate = class PersonTemplate {
    constructor(name) {
        this.name = name;
    }
};
PersonTemplate = __decorate([
    Logger2("logging decorator: logger2"),
    WithTemplate("<h2>Decorator_PersonTemplate</h2>", "app") // декораторы вызываются снизу вверх - сначала WithTemplate, потом Logger
], PersonTemplate);
