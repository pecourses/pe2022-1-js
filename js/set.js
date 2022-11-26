const set1 = new Set();

//Колекція унікальних значень

// size
// add()
// has()
// delete()
// clear()

// values() = keys()
// entries()
// forEach()

set1.add(1).add(2).add(3).add(1).add(1);

console.log('set1.has(1) :>> ', set1.has(1));
console.log('set1.has(5) :>> ', set1.has(5));

set1.delete(1);
console.log('set1 :>> ', set1);

// set1.clear();

for (const item of set1) {
  console.log('item :>> ', item);
}

console.log('set1.entries() :>> ', set1.entries());

const map1 = new Map([...set1.entries()]);

// keys(), values(), (отримати масиви ключів та значень)

const set1Keys = [...set1.keys()];
console.log('set1Keys :>> ', set1Keys);
const set1Values = [...set1.values()];
console.log('set1Values :>> ', set1Values);

console.log('Перебір set :>> ');

function printSet(currentValue, currentKey, set) {
  console.log('currentValue :>> ', currentValue);
  console.log('currentKey :>> ', currentKey);
  console.log('set :>> ', set);
}

set1.forEach(printSet);

// Отримати масив унікальних значень
const arr = [1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 2, 2, 2]; // => [1,2,3,4,5,6]

const uniqArr = [...new Set(arr)];

const users1 = [
  'Test',
  'Grut',
  'John Doe',
  'Grut',
  'John Doe',
  'Grut',
  'John Doe',
];
const users2 = [
  'Test',
  'Jane Doe',
  'Test',
  'Jane Doe',
  'Test',
  'Jane Doe',
  'Grut',
];

// Отримати масив унікальних імен ['Test',  'Grut', 'John Doe', 'Jane Doe']
const uniqNames = [...new Set([...users1, ...users2])];

// Отримати масив марок телефонів
const users = [
  { name: 'Test0', brand: 'IPhone' },
  { name: 'Test1', brand: 'Samsung' },
  { name: 'Test2', brand: 'IPhone' },
  { name: 'Test3', brand: 'Xiaomi' },
  { name: 'Test4', brand: 'Samsung' },
  { name: 'Test5', brand: 'Xiaomi' },
  { name: 'Test6', brand: 'IPhone' },
];

// => ['IPhone', 'Samsung', 'Xiaomi']

const brands = [...new Set(users.map(item => item.brand))];

// {
//   IPhone:['Test0', 'Test2', 'Test6'], Samsung:[], Xiaomi:[]
// }

usersWithPhones = {};

brands.forEach(b => {
  usersWithPhones[b] = users.filter(u => b === u.brand).map(u => u.name);
});
