try {
  // код, який потенційно може викликати помилки
} catch (err) {
  // блок, куди буде передане куревання, якщо виникла вбудована помилка
  // або згенерувалася вручну в throw
}

// throw генерує помилку (виняткову ситуацію/исключительную ситуацию/exception)
// вона передається в catch:
// throw new Error
//          ||
//          \/
// catch  (error)

function fact(n) {
  if (typeof n !== 'number') {
    throw new TypeError('n must be number value'); // на catch
  }
  if (n < 0 || !Number.isSafeInteger(n)) {
    throw new RangeError('n must be positive integer value'); // на catch
  }
  if (n === 0) return 1;
  return n * fact(n - 1);
}

try {
  fact(-5);
} catch (err) {
  console.dir(err);
  if (err instanceof TypeError) {
    console.log('Input incorrect type');
  } else if (err instanceof RangeError) {
    console.log('Value must be pisitive integer');
  } else {
    console.log('Something went wrong');
  }
}
