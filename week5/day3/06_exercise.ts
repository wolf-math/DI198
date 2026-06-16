// 1. Declare a variable emptyObj with the type {} and attempt to assign a new property to it. Observe the TypeScript error.

const emptyObj = {};

// emptyObj.stuff = 'things';

// 2. Call the valueOf() method on emptyObj and log the result to the console.

console.log(emptyObj.valueOf());

let myName: string | number = 'LeBron James';
myName = 9;

let skill: [string, number] = ['programming', 5];

let me: any = 9;
me = true;
me = 'Frank';
me = undefined;
