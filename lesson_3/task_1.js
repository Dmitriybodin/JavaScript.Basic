/*
Task 1
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

let i = 2;
let j;
let flag;
while (i <= 100) {
    j = 2;
    flag = 0;
    while (j * j <= i) {
        if (i % j === 0) flag = 1;
        j++;
    }
    if (flag === 0) console.log(i);
    i++;
}
