// Create an interface Shape with a method draw(). Create another interface Colorable with a method setColor(color: string). Extend both interfaces in a new interface called ColorableShape.

interface Shape {
  draw(): void;
}

interface Colorable {
  setColor(color: string): void;
}

interface ColorableShape extends Shape, Colorable {}

class Square2 implements ColorableShape {
  draw() {}
  setColor(color: string): void {}
}

const mySquare = new Square2();

mySquare.draw();
mySquare.setColor('color');
