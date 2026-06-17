// Define an Abstract Class Shape

// Task: Define an abstract class called Shape with an abstract method getArea().

abstract class Shape {
  abstract getArea(): number;
}

// Implement the Circle Class

// Task: Define a subclass Circle that extends the Shape abstract class and implements the getArea() method to calculate the area of a circle.

class Circle extends Shape {
  constructor(public radius: number) {
    super();
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

let myCirc = new Circle(5);
console.log(myCirc.getArea());
