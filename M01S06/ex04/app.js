(() => {
  let showMessage = (message) => {
    let messagePar = document.createElement('p');

    messagePar.innerText = message;
    messagePar.classList.add('message');

    document.body.appendChild(messagePar);

    setTimeout(() => {
      messagePar.remove();
    }, 200)
  }
  document.addEventListener('DOMContentLoaded', () => {
      let stage = document.querySelector('.stage');

      stage.addEventListener('mouseover', () => {
        console.log('mouseul este pe scena');
        showMessage('mouse is');
      });

      stage.addEventListener('mouseout', () => {
        console.log('mouse not');
        showMessage('mouse is not');
      });
  });
})();