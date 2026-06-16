let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
};

console.log(employee.age);

employee.age = 55;
employee.firstName = 'Billy';

let vacant: {} = {};
console.log(vacant.toString());
