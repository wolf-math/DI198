export function sum(...numbers) {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

export function productize(...numbers) {
  let total = 1;
  numbers.forEach((num) => (total *= num));
  return total;
}

export default function sayHi() {
  return 'hi';
}

// alternate way:
// export { sum, productize };
