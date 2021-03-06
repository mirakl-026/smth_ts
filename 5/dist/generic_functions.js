"use strict";
// пример обобщённой функции - слияние двух объектов
// пример через объекты (по старинке)
function merge1(objA, objB) {
    return Object.assign(objA, objB);
}
//console.log(merge1({name:"Zed"}, {level:18}));  // это работает, но проблема вотв чём:
const mergedObject1 = merge1({ name: "Zed" }, { level: 18 });
console.log(mergedObject1);
//mergedObject1.name =   // нет доступа ни к полю name, ни к полю level - из-за того, что TS не знает, откуда эти поля, и тут можно использовать type-casting as {name: string, level: number} - но это фигня
// тут помогают дженерики
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject2 = merge2({ name: "Shen" }, { level: 17 });
console.log("name: " + mergedObject2.name + ", level: " + mergedObject2.level);
// можно ограничить так: накладывая ограничения на обобщённые типы T и U
const mergedObject3 = merge2({ superKey: "oh this is a key" }, { superKeyBool: true });
console.log(mergedObject3);
// !НО есть проблема:
const mergedObject4 = merge2({ name: "Nikita" }, 30);
console.log(mergedObject4); // {name:"Nikita"} - и все молчат об ошибке, т.к. Object.assign работает только с объекта, JS пофиг, а не указав ограничений на T и U - получается any и TS не жалуется
// тогда придумали констрейнты - constraints - требования к обобщённым типам:
function merge3(objA, objB) {
    return Object.assign(objA, objB);
}
//const mergedObject5 = merge3({name:"Nikita"}, 30);  // теперь TS бесится, что 30 это не объект
const mergedObject5 = merge3({ name: "Nikita" }, { age: 30 });
console.log(mergedObject5);
function countAndDescribe(element) {
    let description = "Got no value";
    if (element.length === 1) {
        description = "Got 1 value";
    }
    else if (element.length > 1) {
        description = "Got " + element.length + " values";
    }
    return [element, description];
}
console.log(countAndDescribe("Hello there!"));
console.log(countAndDescribe([1, 2, 3, 4]));
// keyof
// допустим есть функция вычленяющая значения свойства из объекта:
// function extractAndConvert(obj, key) {   // так бы это выглядело в JS (и всё бы работало) - но TS не уверен - может ли key быть свойством obj, тогда:
//     return obj[key];
// }
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ hint: "kek" }, "hint")); // kek
