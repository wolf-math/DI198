// Write a generic interface SetManager with methods addItem() and clearAll().

interface SetManager<T> {
  equipItem(item: T): void;
  clearAll(): void;
}

// The equipItem() method should accept a parameter of type T and add it to a collection.
// The clearAll() method should remove all items from the collection.

class Paladin<T> implements SetManager<T> {
  items: T[] = [];

  equipItem(item: T): void {
    this.items.push(item);
  }

  clearAll(): void {
    this.items = [];
  }
}

// Then, create a class SimpleSet that implements the SetManager interface and manages a set of items.

const pidge = new Paladin();

pidge.equipItem('bayard');
