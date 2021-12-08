function add (n1: number, n2: number): number {
    //return n1.toString() + n2;  // не сработает, т.к. возвращаемое значение number
    return n1 + n2;
}

// void
function printResult(num: number): void {
    console.log("Result: " + num);
    return;
}

printResult(add(5,12));
console.log(printResult(10));   // undefined, undefined != void

// undefined
// function printResult2(num: number): undefined {
//     console.log("Result: " + num);      // тогда возращай undefined!
//     return undefined;
// }

//функция как тип
// let combine;
// combine = add;
// console.log(combine);   // описание функции
// console.log(combine(1,2));  // 3
// combine = 5;
// console.log(combine);   // 5, потому как any
//console.log(combine(1,2));  // runtime error

// let combine: Function;
// combine = add;
// //console.log(combine);   // описание функции
// console.log(combine(1,2));  // 3
//
// combine = printResult;
// console.log(combine(7,8));  // Result: 1 \n undefined

let combine: (a: number, b: number) => number;
combine = add;  //+
//console.log(combine);   // описание функции
console.log(combine(1,2));  // 3

// combine = printResult;  //-
// console.log(combine(7,8));  // Result: 1 \n undefined

// с коллбэчной
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log("Колбэчная докладывает: ", result);
})