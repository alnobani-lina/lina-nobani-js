let hours = (new Date()).getHours();
let minutes = (new Date()).getMinutes();
let seconds = (new Date()).getSeconds();
let millisecondes = (new Date()).getMilliseconds();

console.log(
    (new Date()).getHours() + ':' +
    (new Date()).getMinutes() + ':' +
    (new Date()).getSeconds() + ':' +
    (new Date()).getMilliseconds(),
    'i arrived to pixallab'
);

console.log(`${hours}:${minutes}:${seconds}:${millisecondes}, i arrived to pixallab`);