abstract class Person {
  constructor(
    private firstName: string,
    private lastName: string,
    private birthdate: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
  getBirthdate(): string {
    return this.birthdate.toLocaleDateString();
  }
}

class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    birthdate: Date,
    protected jobTitle: string
  ) {
    // call the constructor of the Person class:
    super(firstName, lastName, birthdate);
    this.jobTitle = jobTitle;
  }

  describe(): string {
    return `${super.describe()} I'm a ${this.jobTitle}.`;
  }
}

// Define a subclass Manager that extends Employee and includes a private property department.

class Manager extends Employee {
  private static departmentCount: number = 0;
  constructor(
    firstName: string,
    lastName: string,
    birthdate: Date,
    jobTitle: string,
    private department: string
  ) {
    super(firstName, lastName, birthdate, jobTitle);
    this.department = department;

    Manager.departmentCount++;
  }

  describe(): string {
    return `${super.describe()} I work in the ${this.department} team.`;
  }

  public static getDepartmentCount(): number {
    return Manager.departmentCount;
  }
}

const ariel = new Manager(
  'ariel',
  'zinger',
  new Date(1986, 2, 2),
  'product manager',
  'R&D'
);
console.log(ariel.describe());
console.log(ariel.getBirthdate());

console.log(Manager.getDepartmentCount());
