class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error('The stack is overflow!');
    }
    this.elements.push(element);
  }
  pop(): any {
    if (this.elements.length == 0) {
      throw new Error('The stack is empty!');
    }
    return this.elements.pop();
  }
}

const myStack = new Stack(10);

console.log(myStack.isEmpty());
console.log(myStack.isFull());
myStack.push(78);
myStack.push(4);
myStack.push(4);
myStack.push(5);
console.log(myStack.isEmpty());
console.log(myStack.isFull());

myStack.push(78);
myStack.push(4);
myStack.push(4);
myStack.push(5);
myStack.push(78);
myStack.push(4);
console.log(myStack.isFull());
myStack.push(4); // <- overflow
