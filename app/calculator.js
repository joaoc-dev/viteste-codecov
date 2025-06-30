const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => {
  if (y === 0) {
    return 'Cannot divide by 0';
  }
  return (x * 1.0) / y;
};

const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const isEven = (n) => {
  return n % 2 === 0;
};

const isOdd = (n) => {
  return n % 2 !== 0;
};

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  fibonacci,
  factorial,
  isPrime,
};
