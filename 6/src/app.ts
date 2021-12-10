// декораторы - мета-функции

// обычно декораторы это функции, называемые с большой буквы, и имеющие разное кол-во параметров в зависимости от их использования

// декоратор
function Logger (constructor: Function) {
    console.log("logging...");
    console.log(constructor);
}

@Logger
class Person {
    name = "Max";

    constructor() {
        console.log("creating Person object...")
    }
}

const person1 = new Person();
console.log(person1);

// декораторы выполняются когда класс определён, а не когда происходит создание объекта
const person2 = new Person();
console.log(person2);