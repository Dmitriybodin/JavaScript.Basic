/*
Task 1
Почему код даёт именно такие результаты?
 */

var a = 1, b = 1, c, d;
c = ++a; alert(c);         // 2 префиксная форма записи инкрементирования (результат с обновленным значением), a = 2
d = b++; alert(d);         // 1 постфиксная форма записи (сначала возвращение элемента, а потом инкрементирование), b=2
c = (2+ ++a); alert(c);    // 5 с = (2 + 3) - инкрементирование сразу, возврат с обновленным значением, a = 3
d = (2+ b++); alert(d);    // 4 d = (2 + 2) - сначала возврат, потом инкрементирование, b = 3
alert(a);                  // 3
alert(b);                  // 3
