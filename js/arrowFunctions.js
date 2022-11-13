// Необмежена кількість аргументів

// arguments - псевдомасив (пронумерованы + length)

// arguments приймає усі перераховані при виклику функції аргументи,
// навіть якщо при оголошенні функції вказано імена для перших кількох параметрів

// Ex. a - arguments[0], b - arguments[1]

function f(a, b) {
  // console.log('Чи є arguments масивом  :>> ', arguments instanceof Array);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log('f(1,2,3,4,5) :>> ', f(1, 2, 3, 4, 5));

// 1 Написати функцію для розрахунку добутку необмеженої кількості переданих аргументів.
function mult() {
  let accumulator = 1;
  for (let i = 0; i < arguments.length; i++) {
    accumulator *= arguments[i];
  }
  return accumulator;
}

console.log('mult(2,6,4) :>> ', mult(2, 6, 4));
// *2 Написати функцію виду
// calculate(operation, operand1, operand2, …, operandN),
// де operation - це операція, яка має бути виконана над операндами.
// calculate('+', 1, 1, 10, 5);
// calculate('*', 1, 1, 10, 5);
// operation - arguments[0]
function calculate(operation) {
  let calc = 0;

  if (operation === '*') calc++;

  for (let i = 1; i < arguments.length; i++) {
    switch (operation) {
      case '+':
        calc += arguments[i];
        break;
      case '*':
        calc *= arguments[i];
        break;
      default:
        console.log('Incorrect operation');
    }
  }
  return calc;
}
console.log('calculate', calculate('+', 1, 2, 3));

// rest parameters - масив
// rest parameters треба оголошувати
function f1(...args) {
  const sumCallback = function (accumulator, currentValue) {
    return accumulator + currentValue;
  };

  const sum = args.reduce(sumCallback, 0);
  return sum;
}

console.log('f1(1, 2, 3) :>> ', f1(1, 2, 3));
console.log('f1(1, 2, 3, 8) :>> ', f1(1, 2, 3, 8));

function f2(a, b, ...args) {
  console.log('args :>> ', args);
  console.log('arguments :>> ', arguments);
}

function calculate1(operation, ...operands) {
  let calc = 0;

  if (operation === '*') calc++;

  for (let i = 0; i < operands.length; i++) {
    switch (operation) {
      case '+':
        calc += operands[i];
        break;
      case '*':
        calc *= operands[i];
        break;
      default:
        console.log('Incorrect operation');
    }
  }
  return calc;
}
console.log('calculate', calculate1('+', 1, 2, 3, 8));

//           властивість функції | треба оголошувати |   тип     | всі параметри?
// arguments          +                   -            Arguments        +
// rest               -                   +              Array          -

// Arrow functions
