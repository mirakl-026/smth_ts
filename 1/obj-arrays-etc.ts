// const person = {
//     name: "Lalka",
//     age: 29
// };

// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Lalka",
//     age: 29
// };

// const person = {
//     name: "Lalka",
//     age: 29,
//     hobbies: ["Sport","Cooking"],    // TS: hobbies is string[]
//
//     role: [2, "author"],    // такая запись покажет TS, что role (number | string)[] - то есть массив либо числе либо строк
// };
// // Tuples
// person.role.push("admin");
// person.role[1] = 10;        //   и тогда это сработает
// console.log(person.role);   // 2, 10, "admin"

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]  // tuple
} = {
    name: "Lalka",
    age: 29,
    hobbies: ["Sport","Cooking"],    // TS: hobbies is string[]

    role: [2, "author"],    // такая запись покажет TS, что role (number | string)[] - то есть массив либо числе либо строк
};
// Tuples
person.role.push("admin");  // это работает, потому что Push - исключение
//person.role = [1, "first", "admin"];    // так не сработает и это правильно
person.role = [1, "first"];    // так сработает
function printRole(role: [number, string]) {
    console.log("role: 0 -",role[0],", 1 -",role[1])
}

// перечисления
enum globalRoles {
    ADMIN,
    USER,
    UNAUTHORIZED
}

let person2 = {
    role: globalRoles.ADMIN
}

if (person2.role === globalRoles.ADMIN) {
    console.log("person2 is admin");
}


//let favoriteActivities: string[] = ["sports", 1];   // TS: error
//let favoriteActivities: any[] = ["sports", 1];   // TS: no error, but the JS
let favoriteActivities: string[] = ["sports"];   // TS: no error

console.log(person.name);

for (let hobby of person.hobbies) {
    console.log(hobby.toLocaleLowerCase());
}


