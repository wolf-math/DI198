// simple function
function sayHi() {
  console.log('hi');
}

// function call
sayHi();

// // params
function sayHiToUser(username) {
  console.log(`Hello, ${username}!`);
}

sayHiToUser('Ariel');

// // return
// function declaration
function factorialize(num) {
  newNumber = 1;

  for (let i = 1; i <= num; i++) {
    newNumber *= i;
  }

  return newNumber;
}

plusOne = factorialize(9) + 1;
console.log(plusOne);

// // Different Types of Functions

// function expression
const myFunc = function (a, b) {
  return a ** b;
};

const result = myFunc(9, 4);
console.log(result);

// arrow function
const yourFunc = (x, y) => {
  return x * y + 1;
};

console.log(yourFunc(6, 5));

// 1 liner arrow function
const square = (x) => x ** 2;

console.log(square(33));

// IIFE - immediately invokes function expression
(function (a, b) {
  console.log(a, b);
})('chicken', 'nugget');

((a, b) => {
  console.log(a, b);
})('arrow', 'function');
