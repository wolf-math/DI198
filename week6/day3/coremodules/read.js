const fs = require('fs');

const data = fs.readFileSync('info.txt', 'utf-8');
console.log(data); // file content
console.log('The file has been read');
