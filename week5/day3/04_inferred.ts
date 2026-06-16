// Without Type Annotations (Using Type Inference):

function multiply(a: number, b: number) {
  return a * b;
}

// octopus was wrong with this example
let result = multiply(10, 5); // result is inferred as `number` <- no it's not!

// With Type Annotations:

function multiplyAnnotated(a: number, b: number): number {
  return a * b;
}

let resultAnnotated: number = multiplyAnnotated(10, 5);

// 1. Type Inference: Create a variable greeting with a string value and let TypeScript infer its type.

let greeting = 'hello';

// 2. Type Annotations: Create a function subtract that takes two numbers as arguments and returns their difference. Use type annotations for both the parameters and the return type.

function subtract(num1: number, num2: number): number {
  return num1 - num2;
}

// Bonus: Try changing the inferred type variable to a different type (e.g., assign a number to greeting) and observe the TypeScript error

// greeting = 9

let price: number;

price = 9;

// Create a template string that uses the variables firstName and title to display a sentence introducing a person.

const firstName: string = 'Cuthbert';
const title: string = 'Duke';

console.log(`All hail ${title} ${firstName}`);

// Write an expression that uses the NOT operator to invert the boolean value true.
const notTrue: boolean = !true;

// Given the booleans isSunny: boolean = true and isRainy: boolean = false, write an expression using the AND operator to check if both conditions are true.

let isSunny: boolean = true;
let isRainy: boolean = false;
console.log(isRainy && isSunny);

// Write a function toggleStatus that accepts a boolean argument and returns the negation of the input.

function toggleStatus(arg: boolean): boolean {
  return !arg;
}

let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.push(-15);
// numbers.push('seven')
