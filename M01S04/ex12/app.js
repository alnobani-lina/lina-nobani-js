var globaVariable = 'ma aflu in cont global';

function contextTest() {
    var localVariable = 'ma aflu in cont local';
    var globaVariable = 'nu ma aflu...';

    console.log(globaVariable);
    console.log(localVariable);
    console.log(noVariable);
}

console.log(globaVariable);
// console.log(localVariable);
contextTest();

