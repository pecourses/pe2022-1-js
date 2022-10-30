// if - розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// Булевські змінні імунуємо з is...

// const isLogged = false;

// if (isLogged) {
//   console.log('You are logged in))))');
// } else {
//   console.log('Try again(((');
// }

// Задана змінна

// const isEnoughMoney = true;

// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

// const isEnoughMoney = true;

// if (isEnoughMoney) {
//   console.log('Операцію схвалено)))');
// } else {
//   console.log('Операцію не схвалено(((');
// }

// Перевірити, чи скінченне число ввів користувач і видати відповідне повідомлення.

// const inputValue = Number(prompt('Input number')); // => 55, Infinity, NaN

// if (Number.isFinite(inputValue)) {
//   console.log('number');
// } else {
//   console.log('not a finite number');
// }

// Умовні операці

// const age = 18;

// console.log('age > 18 :>> ', age > 18);
// console.log('age < 18 :>> ', age < 18);
// console.log('age >= 18 :>> ', age >= 18);
// console.log('age <= 18 :>> ', age <= 18);

// Нестрога рівність / нерівність - ПОГАНО!
// console.log('age == 18 :>> ', age == 18);
// console.log('age == "18" :>> ', age == '18');
// console.log('age != 18 :>> ', age != 18);
// console.log('age != "18" :>> ', age != '18');

// Строга / нерівність рівність
// console.log('age === 18 :>> ', age === 18);
// console.log('age === "18" :>> ', age === '18');
// console.log('age !== 18 :>> ', age !== 18);
// console.log('age !== "18" :>> ', age !== '18'); // 18!=='18'

// Якщо користовач повнолітній, то привітати, якщо ні - то доступ заборонений

// const age = 20;

// if (age >= 18) {
//   console.log('Wellcome!');
// } else {
//   console.log('Access is denied');
// }

// Скорочена форма if

// При вході перевірити, чи користувач повнолітній
// Якщо ні - то видати попередження про обмежений доступ
// Вивести привітання

// if (умова) {
//   гілка true;
// }

// const age = 18;

// if (age < 18) {
//   console.log('Деякі функції будуть обмежені');
// }

// console.log('Вітаємо на сайті!)');

// если пользователь несовершеннолетний, то "Wellcome"
// иначе если сертификат есть, то "Wellcome"
// иначе вакцинироваться

// const age = 18;
// const isVactinated = true;

// if (age < 18) {
//   console.log('Wellcome)');
// } else {
//   if (isVactinated) {
//     console.log('Wellcome)');
//   } else {
//     console.log('Please go to vactination');
//   }
// }

// if (умова) {
//   гілка true;
// } else if (умова) {
//   гілка ;
// } else if (умова) {
//   гілка ;
// } else {
//   гілка false;
// }

// if (age < 18) {
//   console.log('Wellcome');
// } else if (isVactinated) {
//   console.log('Wellcome');
// } else {
//   console.log('Please go to vactination');
// }

// Ввести 2 числа. Вивести з них більше
// Ввести 2 числа. Вивести що вони рівні, а якщо ні, то більше з них
// * Виконати перевірку, що числа коректні

// const userInput1 = Number(prompt('Введіть перше число'));
// const userInput2 = Number(prompt('Введіть друге число'));

// if (userInput1 > userInput2) {
//   console.log('більше число = ', userInput1);
// } else if (userInput1 < userInput2) {
//   console.log('більше число = ', userInput2);
// } else {
//   console.log('Вони еквівалентні', userInput1 + ' = ' + userInput2);
// }

// Умовні (булевські) операції

// умова І умова   - умова && умова - age >= 18 && isVactinated
// умова АБО умова - умова || умова - age < 18  || isVactinated
// НЕ умова        - !умова         - !isVactinated

// const age = 18;
// const isVactinated = true;

// if (age < 18 || isVactinated) {
//   console.log('Wellcome');
// } else {
//   console.log('Go to vactination');
// }

// console.group('Таблиця істинності &&:');

// console.log('true && true :>> ', true && true); // => true, якщо всі true
// console.log('false && false :>> ', false && false);
// console.log('true && false :>> ', true && false);
// console.log('false && true :>> ', false && true);

// console.groupEnd();

// console.group('Таблиця істинності ||:');

// console.log('true || true :>> ', true || true);
// console.log('false || false :>> ', false || false); // => false, якщо всі false
// console.log('true || false :>> ', true || false);
// console.log('false || true :>> ', false || true);

// console.groupEnd();

// console.group('Таблиця істинності !:');

// console.log('!true :>> ', !true);
// console.log('!false  :>> ', !false);

// console.groupEnd();

// Вивести нагадування, якщо парне число випало на п'ятницю
// const day = 'Tuesday';
// const date = 15;

// if (day === 'Friday' && date % 2 === 0) {
//   console.log('EVEN FRIDAY');
// }

// вивести інфо про знижку, якщо людина пенсійгого віку або має неповнолітню дитину
// const userAge = 80;
// const userChildAge = 25;

// if (userAge >= 60 || userChildAge < 5) {
//   console.log('Znigki)');
// }

// якщо неповнолітній, то обмежити доступ
// const isAdult = true;

// if (!isAdult) {
//   // isAdult !== true, isAdult === false
//   console.log('Доступ обмежено');
// }

// перевітири, чи число э 0 чи ні

// const a = -5;
// if (a) {
//   console.log('no 0');
// } else {
//   console.log(0);
// }
// falsy values: 0, null, undefined, '', false, NaN

// const value = '';
// if (value !== undefined || value !== null || value !== '') {
//   console.log('ok');
// }

// if (value) {
//   console.log('ok');
// }

// Перевірити, що прийшло число і воно не NaN

// const value = 'dgdgdfg';

// if (typeof value === 'number' && !Number.isNaN(value)) {
//   console.log('number not NaN');
// }

// if (!isNaN(value)) {
//   console.log('number not NaN');
// }
