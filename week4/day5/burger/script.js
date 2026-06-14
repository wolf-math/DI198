//
// PROMISE
//

function startBurger() {
  return new Promise((resolve, reject) => {
    console.log('walking to the butcher...');
    setTimeout(() => {
      console.log('getting the beef from the butcher');
      resolve('beef');
    }, 2000);
  });
}

startBurger()
  .then((meatType) => {
    console.log('getting the buns from the bakery');
    return [meatType, 'whole grains'];
  })
  .then(([meatType, bunsType]) => {
    console.log('preparing the burger...');
    console.log(`The ${meatType} burger with ${bunsType} buns is created`);
  });

//
// CALLBACK HELL
//

// function getMeat(callback) {
//   console.log('walking to the butcher...');
//   setTimeout(() => {
//     console.log('getting the beef from the butcher');
//     callback('beef');
//   }, 2000);
// }

// function getBuns(callback) {
//   console.log('getting the buns from the bakery');
//   callback('whole grains');
// }

// function putMeatBetwenBuns(bunsType, meatType, callback) {
//   console.log('preparing the burger...');
//   callback(`The ${meatType} burger with ${bunsType} buns is created`);
// }

// const makeBurger = () => {
//   getMeat((meatType) => {
//     getBuns((bunsType) => {
//       putMeatBetwenBuns(bunsType, meatType, (finalBurger) => {
//         console.log(finalBurger);
//       });
//     });
//   });
// };

// const burger = makeBurger();

//
// ASYNCHRONOUS - (with a mistake)
//

// const makeBurger = () => {
//   const meatType = getMeat(); // undefined
//   const bunsType = getBuns();
//   const burger = putMeatBetwenBuns(bunsType, meatType);
//   return burger;
// };

// function getMeat() {
//   console.log('walking to the butcher...');
//   setTimeout(() => {
//     console.log('getting the beef from the butcher'); // executed last
//     return 'beef';
//   }, 2000);
// }

// function getBuns() {
//   console.log('getting the buns from the bakery');
//   return 'whole grain';
// }

// function putMeatBetwenBuns(bunsType, meatType) {
//   console.log(`creating the ${meatType} burger with ${bunsType} buns`);
//   return 'Delicious Burger';
// }

// const burger = makeBurger();
// console.log(burger);

//
// SYNCHRONOUS
//

// const makeBurger = () => {
//   const meatType = getMeat(); // 'beef'
//   const bunsType = getBuns(); // 'whole grain'
//   const burger = putMeatBetwenBuns(bunsType, meatType); // 'Delicious Burger'
//   return burger;
// };

// function getMeat() {
//   console.log('getting the beef from the butcher');
//   return 'beef';
// }

// function getBuns() {
//   console.log('getting the buns from the bakery');
//   return 'whole grain';
// }

// function putMeatBetwenBuns(bunsType, meatType) {
//   console.log(`creating the ${meatType} burger with ${bunsType} buns`);
//   return 'Delicious Burger';
// }

// const burger = makeBurger();
// console.log(burger);
