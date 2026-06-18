// Write a generic function combine that takes two objects: one representing a user profile and the other representing user preferences. Merge these two objects into a single combined object and demonstrate how it works with different types of inputs.

interface Profile {
  username: string;
  age: number;
  hairColor: string;
}

interface Preferences {
  textSize: string;
  darkMode: boolean;
}

function combine<M, N>(obj1: M, obj2: N) {
  return {
    ...obj1,
    ...obj2
  };
}

const ariel: Profile = {
  username: 'Array-el',
  age: 25,
  hairColor: 'brown'
};

const vas: Profile = {
  username: 'vas',
  age: 23,
  hairColor: 'blonde'
};

const userPrefs: Preferences = {
  textSize: 'Extra Large',
  darkMode: true
};

console.log(combine(ariel, userPrefs));
console.log(combine(vas, userPrefs));
