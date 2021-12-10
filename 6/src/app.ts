// странный декоратор

// декоратор (через фабрику
function WithTemplate (html: string, elemId: string) {
    console.log("template decorator");
    return function (_: Function) {     // _ указывает TS, что мы не будем это использовать, но обязаны указать
        const elem = document.getElementById(elemId);
        if (elem) {
            elem.innerHTML = html;
        }
    }
}

function Logger2 (logMessage: string) {
    return function (_: Function) {
        console.log(logMessage);
    }
}

@Logger2("logging decorator: logger2")
@WithTemplate("<h2>Decorator_PersonTemplate</h2>", "app")   // декораторы вызываются снизу вверх - сначала WithTemplate, потом Logger
class PersonTemplate {
    name : string;

    constructor(name: string) {
        this.name = name;
    }
}

