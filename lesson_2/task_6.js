/*
Task 6
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */

function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case addition: return addition(arg1, arg2);
        case subtraction: return subtraction(arg1, arg2);
        case multiplication: return multiplication(arg1, arg2);
        case division: return division(arg1, arg2);
    }
}

console.log(mathOperation(5, 3, addition));
console.log(mathOperation(5, 6, subtraction));
console.log(mathOperation(2, 3, multiplication));
console.log(mathOperation(6, 3, division));
