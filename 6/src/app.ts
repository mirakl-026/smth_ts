// странный декоратор

// декоратор (через фабрику
function WithTemplate (html: string, elemId: string) {
    return function (_: Function) {     // _ указывает TS, что мы не будем это использовать, но обязаны указать
        const elem = document.getElementById(elemId);
        if (elem) {
            elem.innerHTML = html;
        }
    }
}

@WithTemplate("<h2>Decorator_PersonTemplate</h2>", "app")
class PersonTemplate {
    name : string;

    constructor(name: string) {
        this.name = name;
    }
}

