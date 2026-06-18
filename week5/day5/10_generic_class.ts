interface Collection<T> {
  add(val: T): void;
  remove(val: T): void;
}

class List<T> implements Collection<T> {
  public items: T[] = [];

  add(val: T): void {
    this.items.push(val);
  }

  remove(val: T): void {
    let index = this.items.indexOf(val);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}

console.log(list.items);

let colorList = new List<string>();
colorList.add('pink');
colorList.add('purple');
colorList.add('blue');
colorList.add('yellow');
colorList.add('red');

colorList.remove('pink');

console.log(colorList.items);
