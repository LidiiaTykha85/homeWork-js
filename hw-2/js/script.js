// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let number;
// number = 1;
// if (number > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// number = 0;
// if (number > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// number = -3;
// if (number > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// let variable;
// variable = "test";
// if (variable === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// variable = "qwerty";
// if (variable === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// variable = true;
// if (variable === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let number = 1;
// if (number > 10) {
//   number = number - 5;
// } else {
//   number = number + 5;
// }
// console.log(number); //виведе 6

// let number = 10;
// if (number > 10) {
//   number = number - 5;
// } else {
//   number = number + 5;
// }
// console.log(number); //виведе 15

// let number = 13;
// if (number > 10) {
//   number = number - 5;
// } else {
//   number = number + 5;
// }
// console.log(number); //виведе 8

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// const months = [
//   "Нема такого місяця",
//   "Січень",
//   "Лютий",
//   "Березень",
//   "Квітень",
//   "Травень",
//   "Червень",
//   "Липень",
//   "Серпень",
//   "Вересень",
//   "Жовтень",
//   "Листопад",
//   "Грудень",
// ];
// function getMonthName(monthNumber) {
//   if (monthNumber >= 1 && monthNumber <= 12) {
//     return months[monthNumber];
//   } else {
//     return "Некоректний номер місяця";
//   }
// }
// const userMonth = 5;
// const monthName = getMonthName(userMonth); //виведе травень
// console.log(monthName);

// const userMonth = 14;
// const monthName = getMonthName(userMonth); //виведе некоректний номер місяця
// console.log(monthName);

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// function sumDigitsOfThreeDigitNumber(number) {
//   if (number < 100 || number > 999) {
//     return "Будь ласка, введіть тризначне число.";
//   }

//   const numberAsString = number.toString();
//   const digitsArray = numberAsString.split("");

//   let sum = 0;

//   for (let i = 0; i < digitsArray.length; i++) {
//     sum += parseInt(digitsArray[i]);
//   }

//   return sum;
// }

// console.log(sumDigitsOfThreeDigitNumber(257)); //14
// console.log(sumDigitsOfThreeDigitNumber(901));  //10
// console.log(sumDigitsOfThreeDigitNumber(45)); //будь ласка, введіть тризначне число.
