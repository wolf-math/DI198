function one() {
  two();
  console.log('one');
}

function two() {
  three();
  console.log('two');
}

function three() {
  console.log('three');
}

one();

setTimeout(one, 2000);
