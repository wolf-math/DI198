function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomElement<number>(numbers));

let colors = ['red', 'green', 'blue'];
console.log(getRandomElement<string>(colors));

// implicit mixed type
let strumbers = [1, 'five', 7, 'four', 2, 9];
console.log(getRandomElement(strumbers));

// let returnElem: string;
// returnElem = getRandomElement(numbers);
