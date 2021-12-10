// пример обобщённой функции - слияние двух объектов

// пример через объекты (по старинке)
function merge1(objA: object, objB: object) {   // return: object
    return Object.assign(objA, objB);
}

//console.log(merge1({name:"Zed"}, {level:18}));  // это работает, но проблема вотв чём:
const mergedObject1 = merge1({name:"Zed"}, {level:18});
console.log(mergedObject1);
//mergedObject1.name =   // нет доступа ни к полю name, ни к полю level - из-за того, что TS не знает, откуда эти поля, и тут можно использовать type-casting as {name: string, level: number} - но это фигня

// тут помогают дженерики
function merge2<T, U>(objA: T, objB: U) {   // return T & U - intersection type
    return Object.assign(objA, objB);
}

const mergedObject2 = merge2({name:"Shen"}, {level:17});
console.log("name: " + mergedObject2.name + ", level: " + mergedObject2.level);

// можно ограничить так: накладывая ограничения на обобщённые типы T и U
const mergedObject3 = merge2<{superKey: string}, {superKeyBool: boolean}>({superKey: "oh this is a key"}, {superKeyBool: true});
console.log(mergedObject3);

// !НО есть проблема:
const mergedObject4 = merge2({name:"Nikita"}, 30);
console.log(mergedObject4); // {name:"Nikita"} - и все молчат об ошибке, т.к. Object.assign работает только с объекта, JS пофиг, а не указав ограничений на T и U - получается any и TS не жалуется

// тогда