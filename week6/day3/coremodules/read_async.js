const fs = require('fs');

// const info = fs.readFile('info1.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// console.log('The file has been read');

// fs.writeFile('info1.txt', 'things!', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Write operation complete.');
//   }
// });

// fs.appendFile('info1.txt', '\n' + 'readdir', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Write operation complete.');
//   }
// });

fs.readdir('./', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('files: ', files);
});
