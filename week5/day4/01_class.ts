class Person {
  constructor(
    private ssn: string,
    private firstName: string,
    private lastName: string,
    readonly age: number
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public greet(): string {
    return `${this.firstName} says, hello!`;
  }
}

class Student extends Person {
  constructor(
    ssn: string,
    firstName: string,
    lastName: string,
    age: number,
    protected studentId: string
  ) {
    super(ssn, firstName, lastName, age);
    this.studentId = studentId;
  }
}

const yaakov = new Person('03', 'yaakov', 'stol', 29);
const vas = new Student('04', 'Vasili', 'Nov', 27, '18');

// console.log(yaakov.firstName);
// console.log(yaakov.lastName);
// console.log(yaakov.ssn);
console.log(yaakov.getFullName());
console.log(yaakov.greet());

console.log(vas.getFullName());
console.log(vas.greet());
// console.log(vas.studentId);
