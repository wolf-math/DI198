// Create two types TypeA and TypeB with different properties. Then create an intersection type of TypeA and TypeB and demonstrate that the order of the types doesn't matter.

interface TypeA {
  name: string;
  isStudent: boolean;
}

interface TypeB {
  isConfused: boolean;
  id: number;
}

type TypeAB = TypeA & TypeB;
type TypeBA = TypeB & TypeA;

const aaron0: TypeAB = {
  name: 'Aaron',
  isStudent: false,
  isConfused: true,
  id: 18
};

const aaron1: TypeBA = {
  name: 'Aaron',
  isStudent: false,
  isConfused: true,
  id: 18
};
