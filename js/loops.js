// console.log('Пройти прямо');
// console.log('Повернути наліво');

// console.log('Пройти прямо');
// console.log('Повернути наліво');

// console.log('Пройти прямо');
// console.log('Повернути наліво');

// console.log('Пройти прямо');
// console.log('Повернути наліво');

// while (умова) {
//   дії - ітерація циклу
// }

// let i = 1;
// const limit = 4;

// while (i++ <= limit) {
//   console.log('Пройти прямо');
//   console.log('Повернути наліво');
//   // i++;
// }

// i - змінна ціклу
// змінна цикла має змігнюватися, щоб досягти умови закінчення

// У пользователя есть книга с pageCount страниц    5
// 1) Вывести номера страниц с 1й по последнюю      1 2 3 4 5
// 2) * Вывести четные номера страниц по последнюю  2 4

// let currentPage = 1;
// const pagesCount = 5;

// почати з 1 стор
// перевырити, чи не досягли кінця
// якщо ні, то вивести номер
//             збільшити номур сторінки
// перевырити, чи не досягли кінця
// якщо ні, то вивести номер
//             збільшити номур сторінки
// перевырити, чи не досягли кінця
// якщо ні, то вивести номер
//             збільшити номур сторінки

// while (currentPage <= pagesCount) {
//   console.log(currentPage++);
//   // currentPage++;
// }

// let i = 1;
// const limit = 5;
// if (i % 2 !== 0) {
//   i++;
// }
// while (i <= limit) {
//   console.log(i);
//   i += 2;
// }

// Користувач вводе значення, поки не введе коректне число
// Вивести квадрат цього числа

// let userValue = Number(prompt('Input number'));

// while (!Number.isFinite(userValue)) {
//   userValue = Number(
//     prompt('You are input wrong number. Input correct number')
//   );
// }

// console.log('userValue ** 2 :>> ', userValue ** 2);

// let userValue = prompt('Input number');

// while (!Number.isFinite(Number(userValue)) || userValue === '') {
//   userValue = prompt('You are input wrong number. Input correct number');
// }

// console.log('userValue ** 2 :>> ', userValue ** 2);

// Цикл з лічильником (змінна циклу)

// for (ініціалізація лічильника; умова; зміна лічильника){
//   тіло циклу
// }

// let currentPage = 1;
// const pagesCount = 5;

// while (currentPage <= pagesCount) {
//   console.log(currentPage);
//   currentPage++;
// }

//             1                       2                   3
// for (let currentPage = 1; currentPage <= pagesCount; currentPage++) {
//   console.log(currentPage);
// }

// 1 виконується 1 раз до циклу
// 2 умова продовження циклу. Якщо істинна, то на тіло циклу
// 3 зміна лічильника, після кожної ітерації

// вывести номера стр с посл. по 1

// const pagesCount = 5;

// for (let currentPage = pagesCount; currentPage >= 1; currentPage--) {
//   console.log('currentPage :>> ', currentPage);
// }

// розрахувати суму чисел від 1 до 5 ( 1+2+3+4+5 )

// let s = 0;
// for (let i = 1; i <= 5; i++) {
//   s = s + i;
// }
// console.log('s :>> ', s);

// s = 0
// i = 1;
// s = s +  i= 0 + 1;
// i = 2
// s = s + i = 1 + 2 = 3
// i = 3
// s = s + i = 3 + 3 = 6

// Вивести числа від 2 до 16 парні

// const limit = 16;
// for (let i = 2; i <= 16; i += 2) {
//   console.log(i);
// }

// Розрахувати добуток чисел від 1 до 15 непарні
const limit = 15;

let m = 1;
for (let i = 1; i <= 15; i += 2) {
  m *= i; // 1 * 1 * 3 * 5 * 7 * ... * 15
}
console.log('m :>> ', m);

// i =  i + 2
// i += 2
