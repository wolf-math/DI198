interface A {
  name: string;
}

interface B {
  jobTitle: string;
}

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2
  };
}

let person = { name: 'John' };
let position = { jobTitle: 'Frontend Developer' };

let result = merge(person, position);

console.log(result);
