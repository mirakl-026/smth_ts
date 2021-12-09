"use strict";
// интерфейсы
// пример реализации интерфейса через объект
let user1;
user1 = {
    // теперь реализация:
    name: "Sam",
    age: 27,
    greet(phrase) {
        console.log(`${phrase} from ${this.name}`);
    }
};
user1.greet("Hello there!");
class SteamUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._currentGame = "";
    }
    set currentGame(value) {
        this._currentGame = value;
    }
    greet(phrase) {
        console.log(`${phrase} from ${this.name}`);
    }
    play() {
        if (this._currentGame)
            console.log(`${this.name} playing ${this._currentGame}...`);
        else
            throw new Error("Game is not chosen!");
    }
}
let Nikita = new SteamUser("Nikita", 27);
Nikita.currentGame = "Witcher 3";
Nikita.play();
let add;
add = (num1, num2) => {
    return num1 + num2;
};
console.log("type:", add(3, 4));
let add2;
add2 = (num1, num2) => {
    return num1 + num2;
};
console.log("interface:", add2(3, 4));
