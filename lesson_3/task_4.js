/*
Task 4
*Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
 */

let str = '';
for (let i = 0; i < 20; i++) {
    str = str + 'x';
    console.log(str);
}
