const fs = require('fs');
fs.writeFileSync('./file.txt', 'I am learning node.js');
const firstText = fs.readFileSync('./myfile.txt', 'utf8');
const midText = fs.readFileSync('./file.txt', 'utf8');

console.log(`${firstText} ${midText}`);