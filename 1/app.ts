function add(num1: number, num2: number, show: boolean, prefix: string) {
    const result = num1 + num2;
    if (show)
        console.log(prefix, result);
    else
        return result;
}

const number1 = 12;
const number2 = 2.5;
const showResult = true;
const prefixResult = "result is: ";

add(number1, number2, showResult, prefixResult);