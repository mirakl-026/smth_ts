// декораторы - мета-функции

// обычно декораторы это функции, называемые с большой буквы, и имеющие разное кол-во параметров в зависимости от их использования

// декоратор (через фабрику
function Logger (logMessage: string) {
    return function (c: Function) {
        console.log(logMessage);
        console.log(c);
    }
}

@Logger("Logging-Person")
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