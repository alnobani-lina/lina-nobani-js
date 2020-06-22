//let button = document.getElementById('clicker');
//let removeButton = document.getElementById('remove');
//let clickHandler = () => {
  //alert('Ai apasat butonul!');
//};

// calback
//button.addEventListener('click', clickHandler);
//removeButton.addEventListener('click', () => {
 // button.removeEventListener('click', clickHandler);
//});

let button = document.getElementById('clicker');

button.addEventListener('click', () => {
  alert('clicked')
});

let button1 = document.getElementById('query');

button1.addEventListener('click', () => {
  let userAge = prompt('Enter your age');
  console.log(` ${userAge} years old.`);

  let message = document.getElementById('message');
  message.innerText = ` ${userAge} years old.`;
});
    


