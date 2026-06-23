const greeting = function (name) {
  console.log(`Hello ${name}, welcome to NodeJS`);
};

function farewell(name) {
  console.log(`It was great getting to know you, ${name}. Till we meet again!`);
}

module.exports = { greeting, farewell };
