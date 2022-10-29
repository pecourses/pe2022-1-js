// JS - мова з динамічною типізацією, високорівнева, інтерпретована, мультипарадигмова, скриптова

// js виконується браузером (движком)

// Стандарт ECMASctipt

// Виведення в консоль
// console.log('Hello, world!');

// Вивести в модальне вікно
// alert('Hello, world!');

/*
  Багатостроковий коментар
*/

// Змінні

// let a = 1;
// console.log('a =', a);
// a = a + 1;
// console.log('a =', a);

// для уникнення випадкового переприсвоювання важливої інф-ї
// рекомендується максимально вживати const
// const pi = 3.14; // не можна переприсвоювати значення!

// console.log(pi);

// var b = 10; // старий стиль
// console.log('b =', b);

// Стиль іменування: camelCase
// lowerCamelCase
// UpperCamelCase

// PI, MATH_PI - для констант

// 1    a-z, A-Z, _, $
// 2... a-z, A-Z, _, $, 0-9

// Типи даних - примітивні (7)
//            - object

// string

// const stringVariable1 = 'string1';
// const stringVariable2 = 'string2'; // подвійні дужки
// const stringVariable3 = `string3`;
// "string2" - літерально задане значення

// console.log('He says :"Hello"');

// number
// 1, 22, -50, 10.5, 10e5, Infinity, -Infinity, 0 (+0, -0), NaN

// const numberVariable1 = Infinity;
// console.log('numberVariable1 :>> ', numberVariable1);

// const numberVariable2 = NaN;
// console.log('numberVariable2 :>> ', numberVariable2);

// console.log('10 / 0 :>> ', 10 / 0);
// console.log('10 / -0 :>> ', 10 / -0);
// console.log('"abc" / 5 :>> ', 'abc' / 5);
// Number.MAX_VALUE
// Number.MAX_SAFE_INTEGER

// bigint

// const bigintValue = 9999999999999999n;
// console.log('bigintValue :>> ', bigintValue);

// boolean

// true, false

// const boolValue = false;
// console.log('boolValue :>> ', boolValue);

// symbol
// const symbolValue = Symbol();
// console.log('symbolValue :>> ', symbolValue);

// undefined / value undefined

// const undValue = undefined
// let undValue;
// console.log('undValue :>> ', undValue);

// null / value null

// const nullValue = null;
// console.log('nullValue :>> ', nullValue);

// не примітив / object
const obj = {};

// typeof значення

// операції

// const a = 1; // ініціалізація - присвоювання при оголошенні
// const b = 2;

// let c = null; // ініціалізація
// c = a + b; // присвоювання

// console.log('c :>> ', c);

// console.log('1 + 2 =', 1 + 2);
// console.log('1 - 2 =', 1 - 2);
// console.log('1 * 2 =', 1 * 2);
// console.log('1 / 2 =', 1 / 2);
// console.log('1 % 2 =', 1 % 2); // остача від ділення: 7/2 = 3 (1)/2
// console.log('2 ** 2 =', 2 ** 2);
// console.log('Math.sqrt(9) :>> ', Math.sqrt(9));
// console.log('Math.abs(-10) :>> ', Math.abs(-10));

// task a = 3, b = 4; c - ?
// const a = 3;
// const b = 4;
// const c = Math.sqrt(a ** 2 + b ** 2);
// console.log('c :>> ', c);

// Дано: squareSide = 5; S-?, P-?
// const squareSide = 5;
// const S = Math.pow(squareSide, 2); // squareSide ** 2;
// const P = squareSide * 4;
// console.log('P =', P);
// console.log('S =', S);

// Короткі записи операцій
// let value = 10;
// value += 20; // value = value + 20;
// console.log('value :>> ', value);

// let value2 = 10;
// value2 -= 20; // value2 = value2 - 20;
// console.log('value2 :>> ', value2);
// э *=, /=

// Інкремент і декремент
// i = i + 1
// i += 1
// i++, ++i

// let i = 1;
// постфіксний інкремент i++
// console.log('i++ :>> ', i++);
// console.log('i :>> ', i);

// let j = 1;
// інфіксний інкремент ++j
// console.log('++j :>> ', ++j);
// console.log('j :>> ', j);

// Дослідити:

// let k = 1;
// постфіксний декремент k--
// console.log(k--);
// console.log('k = ', k);

// let l = 1;
// інфіксний декремент --l
// console.log(--l);
// console.log('l = ', l);

// Пріоритетність операцій
// const result = 2 ** (3 ** 2); // 512

// Приведення типу (явне)

// Привести true, false, null, undefined, 55n, Symbol() до Number
console.log('Number(5) :>> ', Number(5));
console.log('Number("5") :>> ', Number('5'));
console.log('Number("abc") :>> ', Number('abc'));
console.log('true =', Number(true));
console.log('false =', Number(false));
console.log('null =', Number(null));
console.log('undefined =', Number(undefined));
console.log('55n =', Number(55n));
// console.log('Symbol() =', Number(Symbol()));

// Неявне приведення типів
console.log('true + 10 :>> ', true + 10);

// Введення даних
// const inputValue = Number(prompt('Введіть число:')); // 50
// const result = inputValue + inputValue; // '50' + '50' = '5050'
// console.log('result :>> ', result);

// Ввести 2 числа і вивести їх суму
const a = +prompt('input value');
const b = Number(prompt('input value'));
const result = a + b;
console.log('You summ is ', result);
