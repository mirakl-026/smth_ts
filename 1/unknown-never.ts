// unknown
let userInput: unknown;
let anyInut: any;

userInput = 5;
userInput = "Max";  // нет проблем, похоже на any, но

let userName: string;

//userName = anyInut; // нет проблем с any
//userName = userInput;   // ошибка! unknown не может быть присвоено string

// чтобы присвоить значение в unknown кому-нибудь ещё - необходимо сначала проверить:
if (typeof userInput === "string")
    userName = userInput;   // нет проблем


// never
// never может быть возвращаемым значением функции

function generateError(message: string, code: number) : never {     // кажется что это функция вовзращает void...
    throw {errorMessage: message, errorCode: code};
}

const result = generateError("Oops!", 778);
console.log(result);    // ... НО на самом деле, если бы был void - был бы undefined, а тут НИЧЕГО, потому что она ничего не возращает (даже до void не доходит (то есть до конца)) - она падает и это never

// так-же, если внутри функции есть бесконечный цикл while(true){...} - то TS и такой функции подсветит never - до конца не дойдёт