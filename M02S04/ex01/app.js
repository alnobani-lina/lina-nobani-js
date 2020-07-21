let box = document.querySelector('.box');
let toggleButton = document.getElementById('apply-style');

setTimeout(() => {
    box.classList.add('animate-class');

    setTimeout(() => {
        box.classList.remove('animate-class')
    }, 2000);
}, 2000);

toggleButton.addEventListener('click', () => {
    let btn = event.currentTarget;

    if(box.classList.contains('animate-class')) {
        box.classList.remove('animate-class');
        btn.innerText = 'apl';
    } else {
        btn.innerText = ' eli';
    }
});