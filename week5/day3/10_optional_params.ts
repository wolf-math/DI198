function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}

console.log(multiply(2, 3, 4));
console.log(multiply(5, 6));

function multiply2(...args: number[]): number {
  let product: number = 1;
  args.forEach((num) => {
    product *= num;
  });

  return product;
}

console.log(multiply2(2, 3, 4, 5, 6, 7, 8, 9));

// Define a function that calculates the area of a rectangle. Allow the height parameter to be optional, defaulting to the value of the width.

function getRect(width: number, height?: number): number {
  return width * (height || width);
}

console.log(getRect(5, 7));
console.log(getRect(8, 6));
console.log(getRect(5));
