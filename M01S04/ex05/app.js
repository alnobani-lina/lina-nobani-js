var i;
var testNumber = window.prompt('inter number:') || 2;
var upperLimit = window.prompt('inter limit:') || 10;

for (i = 0; i <= upperLimit; i++) {
    console.log(i);

    if (i % testNumber !==0) {
        continue;
    } 
    console.log(`this number is multipied by ${testNumber}`);
    }
   