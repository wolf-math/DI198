"use strict";
class Stack {
    size;
    elements = [];
    constructor(size) {
        this.size = size;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }
    pop() {
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
