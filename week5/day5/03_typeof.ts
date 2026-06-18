type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric): alphanumeric {
  // if (typeof a === 'number' && typeof b === 'number') {
  //   return a + b;
  // }

  // if (typeof a === 'string' && typeof b === 'string') {
  //   return a.concat(b);
  // }

  if (typeof a === typeof b) {
    return a + b;
  }

  throw new Error(
    'Invalid arguments. Both arguments must be either numbers or strings.'
  );
}
