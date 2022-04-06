/*
Task 2
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */

const goods = [['firstGood', 300, 3], ['secondGood', 400, 2], ['thirdGood', 100, 5]];

function countBasketPrice(array) {
    let sum = 0;
    for (const key in array) {
        sum = sum + array[key][1] * array[key][2];
        }
    return sum;
}

console.log(countBasketPrice(goods));
