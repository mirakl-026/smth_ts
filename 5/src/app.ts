// generics
// дженерики - обощённые типы, которые могут принимать одинаковую логику к переменным разных типов, пример - массив
// в JS нет дженериков, чисто TS возможности
const stringArray1: string[] = [];
const stringArray2: Array<string> = []; // и stringArray1 и stringArray2 - массивы строк
stringArray2[0] = "la-la-la";
stringArray2[0].split('-');

// другой пример - промисы:
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done!");
    }, 1000);
});

// почему важно указывать тип промиса? - чтобы дальше правильно его обработать:
promise.then((data) => {
    console.log(data[0]+data[1]);   // do
})