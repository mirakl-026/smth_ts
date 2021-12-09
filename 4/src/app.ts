// intersection types
// позволяют комбинировать разные типы

// описание типа админ
type Admin = {
    name: string;
    privileges: string[];
}

// описание типа сотррудник
type Employee = {
    name: string;
    startDate: Date;
}

// комбинированный тип админа и сотрудника
type ElevatedEmployee = Admin & Employee;   // в таком случае буду все поля, без повторов [name, privileges, startDate]

const e1 : ElevatedEmployee = {
    name: "John",
    privileges: ["work", "not work"],
    startDate: new Date()
}

console.log(e1);

// при использовании с Union получается так
type Combinable = string | number;
type Numerical = number | boolean;
type Universal = Combinable & Numerical;    // тут пересечение - number

//const a : Universal = "aaaa";   // нет
const b : Universal = 10;   // нормально

