// обощённые классы

class DataStorage<T extends string | boolean | number> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);   // если T будет объектом - не сработает, т.к. ссылки - будет -1 и удалять последний элемент, поэтому стоит сделать ограничения на T
    }

    getItems() {
        return [...this.data];
    }
}

const db = new DataStorage<string>();
db.addItem("lol");
db.addItem("kek");
db.addItem("cheburek");
console.log(db.getItems());

db.removeItem("kek");
console.log(db.getItems());

const weirdDb = new DataStorage<number | boolean>();
weirdDb.addItem(true);
weirdDb.addItem(7);
console.log(weirdDb.getItems());

// встроенные дополнительные дженерики
// Partial позволяет игнорировать жалобы TS на несоответствие объектов, пример
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// допустим есть функция создающая объект CourseGoal:
function createCourseGoal(title: string, description: string, date: Date) : CourseGoal {
    let result: Partial<CourseGoal> = {};   // иначе будет жаловаться на то, что у {} нет полей title и т.д.
    result.title = title;
    result.description = description;
    result.completeUntil = date;
    return result as CourseGoal;    // т.к. Partial
}

console.log(createCourseGoal("TS", "dushnilovo", new Date()));

// другой встроенный дженерик - Readonly
const names: Readonly<string[]> = ["Max", "Anna"];
//names.push("Bob");  // не может
console.log(names);