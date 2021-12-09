// интерфейсы

interface IPerson {
    name: string;   // мы не можем присваивать значения в интерфейсах
    age: number;

    greet(phrase: string): void;  // описание метода, для реализации
}

// пример реализации интерфейса через объект
let user1 : IPerson;

user1 = {
    // теперь реализация:
    name: "Sam",
    age: 27,
    greet(phrase: string) {
        console.log(`${phrase} from ${this.name}`);
    }
}

user1.greet("Hello there!");

// реализация через класс
interface IPlayer {
    currentGame: string;    // свойства в интерфейсах могут быть readonly

    play(): void;
}

class SteamUser implements IPerson, IPlayer {
    age: number;
    private _currentGame: string;
    name: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this._currentGame = "";
    }

    set currentGame(value: string) {
        this._currentGame = value;
    }

    greet(phrase: string): void {
        console.log(`${phrase} from ${this.name}`);
    }

    play(): void {
        if(this._currentGame)
            console.log(`${this.name} playing ${this._currentGame}...`);
        else
            throw new Error("Game is not chosen!");
    }
}

let Nikita = new SteamUser("Nikita", 27);
Nikita.currentGame = "Witcher 3";
Nikita.play();

// интерфейсы могут наследоваться
interface Named {
    readonly name: string;
}

// тот, кто реализует Greetable должен будет реализовать и Named
interface Greetable extends Named {
    greet() : void;
}


// интерфейсы как типы функций
// пример через type
type Addfn = (a: number, b: number) => number;

let add : Addfn;
add = (num1: number, num2: number) => {
    return num1 + num2;
}
console.log("type:", add(3,4));

// пример через интерфейс и анонимную функцию
interface IAddFunc {
    (a: number, b: number) : number;    // анонимная функция (без имени)
}

let add2 : IAddFunc;
add2 = (num1: number, num2: number) => {
    return num1 + num2;
}
console.log("interface:", add2(3,4));

// опциональные свойства и методы помечаются через ?
interface IOptioanl {
    optionalProperty1?: string;

    optionalMethod1?() : void;
}

