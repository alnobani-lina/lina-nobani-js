const fs = require('fs');

let data = fs.readFileSync('./file.txt', 'utf-8');

let outPutString = `${data} this is our node.`;

console.log(outPutString);