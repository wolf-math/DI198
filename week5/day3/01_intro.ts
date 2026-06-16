let fname: string = 'John';
let age: number = 30;
console.log(`Name: ${fname}, Age: ${age}`);

fname = 'billy';
age = 25;
console.log(`Name: ${fname}, Age: ${age}`);

// The below create errors:
// fname = 77
// age = true

let apple: boolean = true;
// @ts-ignore
apple = 'tasty';
