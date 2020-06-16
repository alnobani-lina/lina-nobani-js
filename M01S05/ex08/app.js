let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let clickHandler = () => {
    alert('ai apasat button');
};

//calback
button.addEventListener('clicker', clickHandler);
removeButton.addEventListener('click', () => {
    button.removeEventListener('click', clickHandler);
});
    


