//---1---//
//1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
//бал і кількість пропущених занять
//2) написати метод який буде виводити цю інформацію
//3) написати три варіанти студентів
//4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: "Іван",
//   speciality: "Компютерні науки",
//   averageGrade: 85,
//   missedClasses: 3,
//   getInfo: function () {
//     console.log(
//       `Імя:${this.name},
//        Спеціальність: ${this.speciality},
//        Середній бал: ${this.averageGrade},
//        Пропущено занять: ${this.missedClasses}`
//     );
//   },
// };
// student.getInfo();

// const student1 = {
//   name: "Марія",
//   speciality: "Математика",
//   averageGrade: 90,
//   missedClasses: 1,
// };
// const student2 = {
//   name: "Олег",
//   speciality: "Філологія",
//   averageGrade: 78,
//   missedClasses: 5,
// };
// const student3 = {
//   name: "Анна",
//   speciality: "Економіка",
//   averageGrade: 82,
//   missedClasses: 2,
// };
// console.log();
// // student.getInfo.call(student1);
// // student.getInfo.call(student2);
// // student.getInfo.call(student3);

// // student.getInfo.bind(student1)();
// // student.getInfo.bind(student2)();
// // student.getInfo.bind(student3)();

// student.getInfo.apply(student1, []);
// student.getInfo.apply(student2, []);
// student.getInfo.apply(student3, []);

//---2---//
//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

// function showDefinition() {
//   if (this.id === "html") {
//     alert(
//       "HTML(HyperText Markup Language)-це мова розмітки для створення веб-сторінок."
//     );
//   } else if (this.id === "css") {
//     alert(
//       "CSS(Cascading Style Sheets)-це мова стилів для оформлення зовнішнього вигляду веб-сторінок."
//     );
//   }
//   this.style.backgroundColor = "lightgreen";
// }
// document.getElementById("html").onclick = showDefinition;
// document.getElementById("css").onclick = showDefinition;

//---3---//
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:
//1) banana 30, 4,5
//2) cherry 58, 1,3
//3) orange 89. 3,4

// function shop(product, priceKg, quantity) {
//   let total = priceKg * quantity;
//   return product + " = " + total.toFixed(2) + " грн";
// }
// console.log(shop("banana", 30, 4.5));
// console.log(shop("cherry", 58, 1.3));
// console.log(shop("orange", 89, 3.4));
