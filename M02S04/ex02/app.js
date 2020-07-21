let mainButtons = document.querySelectorAll('.btn');
let box = document.querySelector('.box');
let colorInput = document.getElementById('color-input');

mainButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let colorName = button.innerText.toLowerCase();

        box.style.backgroundColor = colorName;
    });
});

colorInput.addEventListener('change', (event) => {
    let colorInput = event.currentTarget;
    let dynamicColorButton = colorInput.nextElementSibiling;
    let selctedColor = colorInput.value;

    dynamicColorButton.style.backgroundColor = selctedColor;
});

colorInput.nextElementSibling.addEventListener('click', () => {
    box.style.backgroundColor = colorInput.value;
});