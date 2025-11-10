//Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }
// через ? (тернерний оператор)
// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }
// console.log(checkAge(20));

//через || (логічне або)
// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }
// console.log(checkAge(14));

//завдання 2
//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// // console.log(min(3, 7));  //виведе 3
// console.log(min(8, 6)); // виведе 6

//завдання 3
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );
// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились"),
//   () => alert("Ви скасували виконання.")
// );
