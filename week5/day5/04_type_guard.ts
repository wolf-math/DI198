// Write a function formatValue that takes a parameter of type alphanumeric (either a string or a number) and performs the following:

// If the parameter is a number, return the number formatted as currency (e.g., $100.00).
// If the parameter is a string, return the string in uppercase.

// Implement the formatValue function that uses the typeof operator to determine the type and handle the input accordingly.

type alphanumeric = string | number;

function formatValue(input: alphanumeric): string {
  if (typeof input === 'number') {
    return `$${input.toFixed(2)}`;
  }

  return input.toUpperCase();
}

const a = 55.2334;
const b = 'silly putty';

console.log(formatValue(a));
console.log(formatValue(b));
