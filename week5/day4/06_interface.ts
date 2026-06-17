interface Person {
  firstName: string;
  middleName?: string; // Optional property
  lastName: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.middleName || ''} ${person.lastName}`;
}

let ariel = {
  firstName: 'Ariel',
  // middleName: 'Herbert',
  lastName: 'Zinger'
};

// console.log(getFullName(ariel));

// Task: Create an interface Book with properties title, author, and pages (number). Add an optional property genre (string). Write a function getBookSummary that returns a summary of the book's details, including the genre if it's provided.

interface Book {
  title: string;
  author: string;
  pages: number;
  genre?: string;
}

function getBookSummary(book: Book) {
  const genre = book.genre ? `a ${book.genre} book, and` : '';
  return `${book.title} by ${book.author} ${genre} is ${book.pages} pages long.`;
}

const frank = {
  title: 'Frankenstein',
  author: 'Mary Shelley',
  pages: 280,
  genre: 'Horror/Thriller'
};

const carl = {
  title: 'Dungeon Crawler Carl',
  author: 'Matt Diniman',
  pages: 740
};

console.log(getBookSummary(frank));
console.log(getBookSummary(carl));

interface Person {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let person1: Person = {
  ssn: '171-28-0926',
  firstName: 'John',
  lastName: 'Doe'
};

let person2: Person = {
  ssn: '4674-28-0926',
  firstName: 'Bobby',
  lastName: 'McGee'
};
