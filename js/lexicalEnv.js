// scope

// Змінні, оголошені поза будь-яким блоком - глобальні, видно всім блокам (Scope - Script)
// Змінні, оголошені усередині блоку, тобто в {} - локальні, видно тільки всередині блоку (Scope - Block)

const globalVar = 'global';

if (true) {
  const localVarIn1If = 'local in 1 if';

  if (true) {
    const localVarIn2If = 'local in 2 if';
    console.log('globalVar :>> ', globalVar);
    console.log('localVarIn1If :>> ', localVarIn1If);
    console.log('localVarIn2If :>> ', localVarIn2If);
  }
}

// Lexical Environment / Лексичне оточення / Лексическое окружение

const a = 'global';

f1();

function f1() {
  const a = 'local';

  // f2();
  return function f2() {
    console.log('a :>> ', a);
  };
}

// Лексичне оточення - концепція, згідно з якою оточення ф-і формується
// згідно з місцем її оголошення в коді

const f2Returned = f1();
f2Returned();

// Замикання - це комбінація функції та лексичного оточення, в якому ця функція була визначена.
// У Closure в Scope - локальні змінні функції, всередині якої функція, що виконується, була створена.

function counter() {
  let i = 0;

  return function () {
    return ++i;
  };
}

const counter1 = counter();
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());

const counter2 = counter();
console.log('counter2() :>> ', counter2());
console.log('counter2() :>> ', counter2());

console.log('counter1() :>> ', counter1());
