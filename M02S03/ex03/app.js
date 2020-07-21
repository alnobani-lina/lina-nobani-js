let countIn = 0;
let countOut = 0;


let createMessage = (countIn, countOut) => {
  return `In: ${countIn}, Out: ${countOut}`;
};

let createSecondMessage = (countIn, countOut) => {
  return `The mouse has passed ${countIn + countOut}`;
}


let p = document.createElement('p');
document.body.prepend(p);
p.innerText = 'Mouseul nu este pe scena';

let stageElement = document.querySelector('.stage');

let p2 = document.createElement('p');
p2.innerText = createMessage(countIn, countOut);
p.after(p2);

let p3 = document.createElement('p');
p3.innerText = createSecondMessage(countIn, countOut);
p2.after(p3);

stageElement.addEventListener('mouseover', () => {
  let message = 'Mouseul este pe scena';
  countIn++;
  

  p2.innerText = createMessage(countIn, countOut);
  p.innerText = message;
  p3.innerText = createSecondMessage(countIn, countOut);
});

stageElement.addEventListener('mouseout', () => {
  let message = 'Mouseul nu este pe scena';
  countOut++;
  

  p2.innerText = createMessage(countIn, countOut);
  p.innerText = message;
  p3.innerText = createSecondMessage(countIn, countOut);
});