const firstName = 'Test';
const lastName = 'Testovich';
const email = 'test@gmail.com';

// Оголошення обїєкту
const obj1 = {}; // cинтаксичний цукор
const obj2 = Object();
const obj3 = new Object();

// властивості: рядки, Symbol()
const user = {
  // key: value,
  firstName: 'Test',
  lastName: 'Testovich',
  email: 'test@gmail.com',
  password: 'qwerty',
};

console.log('user :>> ', user);
// alert(user); // не вміє виводити об'єкти

// Доступ до властивостей (. - операція доступу до властивості)
// Читання властивості
console.log('user.email :>> ', user.email);
// Зміна значення властивостей
user.email = 'anothetmail@gmail.com';

// Додавання властивості
user.age = 10;
console.log('user :>> ', user);

// Видалення властивості
delete user.password;
console.log('user :>> ', user);

// Task: Створити об'єкт машини (марка, модель, рік випуску, номер, колір)
// Переглянути об'єкт
// змінити колір
// видалити властивість рік випуску
// додати властивість ім'я/прізвище власника
// Переглянути об'єкт
const car = {
  mark: 'VW',
  model: 'Jetta',
  year: 1987,
  number: '3642',
  color: 'Red',
};

console.log('car :>> ', car);
car.color = 'Green';
delete car.year;
car.firstName = 'John';
car.lastName = 'Malcovich';
console.log('car :>> ', car);

const capibara = {
  superPower: 'cute',
  countOfLegs: 3,
  countOfEyes: 2,
  favoriteThing: 'sun and water',
};

capibara.type = 'rat';
capibara.countOfLegs = 4;
delete capibara.favoriteThing;
console.log('capibara', capibara);
