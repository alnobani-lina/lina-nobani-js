const fs = require('fs');
const firstText = fs.readFileSync('./another.txt', 'utf8');
const middleText = fs.readFileSync('./my-file.txt', 'utf8');
const finalText = fs.readFileSync('./dir/this-other-file.txt', 'utf8');

console.log(`${firstText} ${middleText} ${finalText}!`);