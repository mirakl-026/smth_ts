"use strict";
// обощённые классы
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1); // если T будет объектом - не сработает, т.к. ссылки - будет -1 и удалять последний элемент, поэтому стоит сделать ограничения на T
    }
    getItems() {
        return [...this.data];
    }
}
const db = new DataStorage();
db.addItem("lol");
db.addItem("kek");
db.addItem("cheburek");
console.log(db.getItems());
db.removeItem("kek");
console.log(db.getItems());
const weirdDb = new DataStorage();
weirdDb.addItem(true);
weirdDb.addItem(7);
console.log(weirdDb.getItems());
// допустим есть функция создающая объект CourseGoal:
function createCourseGoal(title, description, date) {
    let result = {}; // иначе будет жаловаться на то, что у {} нет полей title и т.д.
    result.title = title;
    result.description = description;
    result.completeUntil = date;
    return result; // т.к. Partial
}
console.log(createCourseGoal("TS", "dushnilovo", new Date()));
// другой встроенный дженерик - Readonly
const names = ["Max", "Anna"];
//names.push("Bob");  // не может
console.log(names);
