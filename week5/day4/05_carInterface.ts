// Define a Car Interface

// Task: Create an interface Car with properties make, model, and year (all strings). Then, write a function getCarInfo that takes a Car object and returns a formatted string with the car's details.

interface Car {
  make: string;
  model: string;
  year: string;
  color?: string;
}

function getCarInfo(car: Car): string {
  return `${car.year} ${car.make} ${car.model}`;
}

const aaronCar = {
  year: '2013',
  make: 'Suzuki',
  model: 'SX4',
  isAwesome: true
};

console.log(getCarInfo(aaronCar));
