// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const elementToHide = document.querySelector(".element-to-hide");
// const hideButton = document.querySelector(".hide-button");

// hideButton.addEventListener("click", () => {
//   elementToHide.classList.add("hidden");

//   hideButton.textContent = "Елемент приховано!";
//   hideButton.disabled = true;
// });
//////----2----///////
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const myButton = document.querySelector(".button");

// myButton.addEventListener("click", () => {
//   myButton.classList.add("hidden");
//   console.log("Кнопка зникла");
// });

/////----3----//////

const toggles = document.querySelectorAll(".has-children");

toggles.forEach((item) => {
  item.addEventListener("click", function (event) {
    if (event.target !== this) return;
    this.classList.toggle("open");
  });
});
