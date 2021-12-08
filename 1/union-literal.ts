// function combine(input1: number | string, input2: number | string, conversionResult: "as-number" | "as-text") {
//     let result;
//     if (typeof input1 === "number" && typeof input2 === "number")
//          result = input1 + input2;
//     else
//         result = input1.toString() + input2.toString();
//
//     if (conversionResult === "as-number")
//         return +result;
//     else
//         return result.toString();
// }

// типы через алиасы
type Combinable = number | string;
type ConversionReslt = "as-number" | "as-text";

function combine(
    input1: Combinable,
    input2: Combinable,
    conversionResult: ConversionReslt
) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number")
        result = input1 + input2;
    else
        result = input1.toString() + input2.toString();

    if (conversionResult === "as-number")
        return +result;
    else
        return result.toString();
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedAgesText = combine(30, 26, "as-text");
console.log(combinedAgesText);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);


type User = { name: string; age: number };

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}

greet({name:"Jeka",age:10});
console.log(isOlder({name:"Nikita",age:8}, 10));