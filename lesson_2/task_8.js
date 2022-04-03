/*
Task 8
*С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.
 */

function functionPower(val, pow) {
    if (pow === 0) return 1;
    if (pow === 1) return val;
    return functionPower(val, pow - 1) * val;
}

console.log(functionPower(3,1));
