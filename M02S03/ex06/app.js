let buttonElement = document.getElementsByClassName('btn')[0];
let displayElements = document.getElementsByClassName('display');
let message = 'the button was pressed ...';

buttonElement.addEventListner('click', () => {
    let windowWidth = window.innerWidth;
    let targetClassName = 'lo-res';

    if (windowWidth >= 650) {
        targetClassName = 'mid-res'
    }

    if (windowWidth > 1000) {
        targetClassName = 'high-res'
    }

    for (let i = 0; i < displayElements.length; i++) {
        if (displayElements[i].classList.contains(targetClassName)) {
            let p = document.createElement('p');
            p.innerText = message;

            displayElements[i].append(p);
        }
    }
});