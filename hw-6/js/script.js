//Створити телефонну книгу
//створити початковий клас Abonent, де зберігатимуться ім*я і номер
//створити set який прийматиме телефон і номер
//створити get який виводитиме данні про абонента
//створити три різних юзери
//вивести данні
//////

class Abonent {
  #name;
  #phoneNumber;
  constructor(name, phoneNumber) {
    this.#name = name;
    this.#phoneNumber = phoneNumber;
  }

  get name() {
    return this.#name;
  }
  get phoneNumber() {
    return this.#phoneNumber;
  }

  set name(newName) {
    this.#name = newName;
  }
  set phoneNumber(newNumber) {
    this.#phoneNumber = newNumber;
  }
  getInfo() {
    return `Імя: ${this.#name}, Номер: ${this.#phoneNumber} `;
  }
}
class PhoneBook {
  #contacts;
  constructor() {
    this.#contacts = [];
  }
  addAbonent(abonent) {
    this.#contacts.push(abonent);
  }
  findByNumber(number) {
    return this.#contacts.filter((contact) => contact.phoneNumber === number);
  }
  showAll() {
    this.#contacts.forEach((contact) => console.log(contact.getInfo()));
  }
}

const phoneBook = new PhoneBook();
phoneBook.addAbonent(new Abonent("Олександр", "+380987643855"));
phoneBook.addAbonent(new Abonent("Марія", "+24098476584"));
phoneBook.addAbonent(new Abonent("Анна", "+240984352784"));

console.log("📖 Всі абоненти:");
phoneBook.showAll();
