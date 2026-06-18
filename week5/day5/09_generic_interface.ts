// Write a generic interface DataHolder that represents an object holding a single piece of data. The DataHolder interface should have a single property data of a generic type T.

interface DataHolder<T> {
  data: T;
}

// Then, create an instance of DataHolder where T is a boolean and another instance where T is a string.

let one: DataHolder<boolean> = {
  data: true
};

let two: DataHolder<string> = {
  data: 'hello'
};

// =========================

interface EmployeeInfo<T> {
  name: string;
  // ...
  salary: T; // <- $50,000.00 or 50000
}

const arl: EmployeeInfo<string> = {
  name: 'Ariel',
  salary: '$50,000.00'
};

const ykv: EmployeeInfo<number | string> = {
  name: 'Yaakov',
  salary: 50000
};
